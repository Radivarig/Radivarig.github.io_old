import React from "react"
import { Switch, BrowserRouter, Route } from "react-router-dom"
import { HashLink as Link } from "react-router-hash-link"

import ProfileViewer from "./Components/ProfileViewer.jsx"
import NotFoundViewer from "./Components/NotFoundViewer.jsx"
import StatCounter from "./Components/StatCounter.jsx"
import TabDetails from "./Components/TabDetails.jsx"

import GithubRibbon from "./Components/GithubRibbon.jsx"

import { Grid, Button, Hidden } from "material-ui"
import { MuiThemeProvider, createMuiTheme } from "material-ui/styles"
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
    "root": {
      "transform": "translateY(-50%)",
      "top": "50%",
      "display": "flex",
      "alignItems": "center",
      "flexDirection": "column",
      "position": "fixed",
    },
  },
  "demo": {
    "boxShadow": "inset 0 0 10px #000000",
  },
}

export default class App extends React.Component {
  render = () => (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <Route render={(props) => {

          const routes = tabInfos.map ((tab, i) => {
            return (
              <Link
                to={`#${tab.route}`}
                key={i}
              >
                <Button style={styles.nav.button}>{tab.label}</Button>
              </Link>
            )
          })

          const contents = tabInfos.map ((tab, i) => {
            const isActive = props.location.hash === `#${tab.route}`

            let content =
              <div
                key={i}
                id={tab.route}
              >
                <TabDetails tab={tab} imgFloatLeft={i % 2 === 1} />

                {
                  isActive ?
                    <div style={styles.demo}>
                      <tab.component />
                    </div>
                    : ""
                }

                <hr />
              </div>

            if (isActive)
              content =
                <div key={i} className="highlight">
                  {content}
                </div>

            return content

          })

          return (
            <div>
              <Grid container justify="center">

                <Grid item xs={12} md={3}>
                  <ProfileViewer />
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
              <GithubRibbon gitHref="Radivarig" />

            </div>
          )
        }}
        />
      </BrowserRouter>
    </MuiThemeProvider>
  )
}
