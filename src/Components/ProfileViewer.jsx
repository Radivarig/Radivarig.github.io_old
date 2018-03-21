import React from "react"
import { Grid, Button, SvgIcon, Chip } from "material-ui"

import resume from "../resume.json"
import icons from "../svgIcons.js"

const styles = {
  "svg": {
    "color": "grey",
  },
  "iconsContainer": {
    "display": "flex",
    "justifyContent": "center",
  },
  "button": {
    "padding": 0,
    "minHeight": 0,
  },
  "chip": {
    "color": "green",
  },
}

export default (props) =>
  <div style={{ "textAlign": "center" }}>
    <div>
      <Grid container alignItems="center">
        <Grid item xs={5} sm={12}>
          <Button onClick={props.onClickPicture}>
            <img
              style={{ "borderRadius": "50%", "width": 200, "height": 200 }}
              src={resume.basics.picture}
            />
          </Button>

          <div>Reslav Hollos</div>
          <div>Software Engineer</div>

        </Grid>
        <Grid
          style={{ "zIndex": 2 }} item xs={6}
          sm={12}
        >

          <div style={styles.iconsContainer}>

            <Button style={styles.button} target="__BLANK" href="https://github.com/Radivarig">
              <SvgIcon style={styles.svg}>{icons.github}</SvgIcon>
            </Button>

            <Button style={styles.button} target="__BLANK" href={`mailto:${resume.basics.email}`}>
              <SvgIcon style={styles.svg}>{icons.gmail}</SvgIcon>
            </Button>

            <Button style={styles.button} target="__BLANK" href="https://linkedin.com/in/ReslavHollos">
              <SvgIcon style={styles.svg}>
                {icons.linkedIn}
              </SvgIcon>
            </Button>

          </div>

          <hr />

          <Button style={styles.button} target="__BLANK" href="https://linkedin.com/in/ReslavHollos">
              &lt;Skills/&gt;
          </Button>

          <div>
            {
              resume.skills.map ((s, i) =>
                <Chip
                  key={i}
                  label={s}
                  style={styles.chip}
                />)
            }
          </div>

          <hr />
          <div>
            Click navigation or on title of each to open project demo.
          </div>

        </Grid>
      </Grid>
    </div>
  </div>
