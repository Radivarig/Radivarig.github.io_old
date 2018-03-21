import React from "react"
import { Switch, HashRouter, Route } from "react-router-dom"

import ProfileViewer from "./Components/ProfileViewer.jsx"
import NotFoundViewer from "./Components/NotFoundViewer.jsx"
import StatCounter from "./Components/StatCounter.jsx"
import TabDetails from "./Components/TabDetails.jsx"

import GithubRibbon from "./Components/GithubRibbon.jsx"
import GithubButton from "./Components/GithubButton.jsx"

import { Grid, Button, Hidden, Drawer, MenuItem, SvgIcon } from "material-ui"
import { MuiThemeProvider, createMuiTheme } from "material-ui/styles"
import icons from "./svgIcons.js"

const theme = createMuiTheme ({
  "palette": {
    // "type": "dark",
  },
})

import tabInfos from "./tabInfos.js"

import "style-loader!css-loader!./index.css"

const styles = {
  "nav": {
    "button": {
      "padding": 0,
      "minHeight": 0,
    },
    "menu": {
      "position": "fixed",
      "padding": 10,
    },
    "root": {
      "transform": "translateY(-50%)",
      "top": "50%",
      "display": "flex",
      "alignItems": "center",
      "flexDirection": "column",
      "position": "fixed",
    },
  },
}

export default class App extends React.Component {
  state = { "navOpen": false }

  handleNavToggle = () => this.setState ({ "navOpen": !this.state.navOpen })
  handleNavClose = () => this.setState ({ "navOpen": false });

  render = () => (
    <MuiThemeProvider theme={theme}>
      <HashRouter>
        <Route render={(props) => {
          const routes = ([{ "route": "", "label": "home" }].concat (tabInfos)).map ((tab, i) => {
            const isActive = props.location.pathname === `/${tab.route}`
            return (
              <Button
                key={i}
                color={isActive ? "secondary" : "default"}
                style={styles.nav.button}
                onClick={() => {props.history.push (`/${tab.route}`)}}
              >
                {tab.label}
              </Button>
            )
          })

          const contents = tabInfos.map ((tab, i) =>
            <div key={i}>
              <TabDetails
                tab={tab}
                imgFloatLeft={i % 2 === 1}
                onClick={() => {props.history.push (`/${tab.route}`)}}
              />
              <hr />
            </div>
          )

          return (
            <div>

              <Hidden mdUp implementation="css">
                <SvgIcon onClick={this.handleNavToggle} style={styles.nav.menu}>
                  {icons.menu}
                </SvgIcon>
              </Hidden>

              <Drawer
                anchor="right"
                open={this.state.navOpen}
                onClose={this.handleNavClose}
              >
                {
                  routes.map ((route, i) =>
                    <MenuItem
                      key={i} onClick={(e) => {
                        this.handleNavClose ()
                        route.props.onClick (e)
                      }}
                    >
                      {route}
                    </MenuItem>)
                }
              </Drawer>

              <Grid container justify="center">

                <Grid item xs={12} md={3}>
                  <ProfileViewer onClickPicture={() => {props.history.push ("/")}} />
                </Grid>

                <Grid item xs={12} md={6}>
                  <Switch>
                    <Route
                      exact path="/"
                      component={() => {
                        return (
                          <div>
                            {contents}
                          </div>
                        )
                      }}
                    />
                    {
                      tabInfos.map ((tab, i) => {
                        return (
                          <Route
                            key={i}
                            exact path={`/${tab.route}`}
                            component={() => {
                              return (
                                <div style={{ "textAlign": "center" }}>
                                  {
                                    tab.repo ?
                                      <GithubButton
                                        user="Radivarig"
                                        repo={tab.repo}
                                        type="star"
                                        showCount

                                      /> : ""
                                  }
                                  <TabDetails tab={Object.assign ({}, tab, { "image": "" })} />

                                  <hr />
                                  <tab.component />
                                </div>
                              )
                            }}
                          />
                        )
                      })
                    }

                    <Route path='/*' component={NotFoundViewer} />

                  </Switch>
                </Grid>

                <Grid item md={3}>
                  <Hidden smDown implementation="css">
                    <Grid container>
                      <div style={styles.nav.root}>
                        {routes}
                      </div>
                    </Grid>
                  </Hidden>
                </Grid>

              </Grid>

              <StatCounter />

              <Hidden xsDown implementation="css">
                <GithubRibbon gitHref="Radivarig" />
              </Hidden>

            </div>
          )
        }}
        />
      </HashRouter>
    </MuiThemeProvider>
  )
}
