import React from "react"
import { Switch, HashRouter, NavLink, Route } from "react-router-dom"

import ProfileViewer from "./Components/ProfileViewer.jsx"
import NotFoundViewer from "./Components/NotFoundViewer.jsx"

import TwitterFollowButton from "./Components/TwitterFollowButton.jsx"
import StatCounter from "./Components/StatCounter.jsx"

import TabDetails from "./Components/TabDetails.jsx"

import tabInfos from "./tabInfos.js"
// const tabInfosByRoute = tabInfos.reduce ((a, b) => {a[b.route] = b; return a}, {})

export default class App extends React.Component {
  componentDidMount = () => {
    document.body.style.backgroundColor = "rgb(210, 212, 214)"
  }

  render = () => (
    <HashRouter>
      <Route render={(props) => {
        const tabs = tabInfos.map ((tab, i) => {
          const route = `/${tab.route}`
          const isActive = props.location.pathname === route
          return (
            <NavLink
              key={i}
              to={route}
            >
              <button disabled={isActive}>
                {tab.label}
              </button>
            </NavLink>
          )
        })

        return (
          <div style={{ "textAlign": "center" }}>
            <ul>
              {tabs}
            </ul>

            <div style={{ "height": "1em" }}>
              <TwitterFollowButton user='Radivarig' showCount={true} />
            </div>

            <Switch>
              <Route exact path="/" component={ProfileViewer} />
              {
                tabInfos.map ((t, i) =>
                  <Route
                    key={i} exact path={`/${t.route}`}
                    render={() =>
                      <div>
                        <hr />
                        <TabDetails tab={t} />
                        <hr />
                        <t.component />
                      </div>
                    }
                  />
                )
              }
              <Route path='/*' component={NotFoundViewer} />

            </Switch>

            <StatCounter />

          </div>
        )
      }}
      />
    </HashRouter>
  )
}
