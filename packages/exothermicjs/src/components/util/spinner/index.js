import React from 'react'
import { StyleSheet, css } from 'aphrodite'

const Spinner = () => (
  <div className={css(styles.foldingCube)}>
    <div className="sk-cube1 sk-cube" />
    <div className="sk-cube2 sk-cube" />
    <div className="sk-cube4 sk-cube" />
    <div className="sk-cube3 sk-cube" />
  </div>
)

export default Spinner

const foldCubeAngle = {
  "0%": {
    transform: `perspective(140px) rotateX(-180deg)`,
    opacity: 0,
  },
  "10%": {
    transform: `perspective(140px) rotateX(-180deg)`,
    opacity: 0,
  },
  "25%": {
    transform: `perspective(140px) rotateX(0deg)`,
    opacity: 1,
  },
  "75%": {
    transform: `perspective(140px) rotateX(0deg)`,
    opacity: 1,
  },
  "90%": {
    transform: `perspective(140px) rotateY(180deg)`,
    opacity: 0,
  },
  "100%": {
    transform: `perspective(140px) rotateY(180deg)`,
    opacity: 0,
  },
}

const styles = StyleSheet.create({
  foldingCube: {
    margin: `20px auto`,
    width: `40px`,
    height: `40px`,
    position: `relative`,
    transform: `rotateZ(45deg)`,
    "sk-cube": {
      float: `left`,
      width: `50%`,
      height: `50%`,
      position: `relative`,
      transform: `scale(1.1)`,
      ":before": {
        content: ``,
        position: `absolute`,
        top: 0,
        left: 0,
        width: `100%`,
        height: `100%`,
        backgroundColor: `#333`,
        animationName: [foldCubeAngle],
        animationDuration: `2.4s`,
        animationTimingFunction: `linear`,
        animationIterationCount: `infinite`,
        animationDirection: `both`,
        transformOrigin: `100% 100%`,
      },
    },

    "sk-cube2": {
      transform: `scale(1.1) rotateZ(90deg)`,
      ":before": {
        animationDelay: `0.3s`,
      },
    },

    "sk-cube3": {
      transform: `scale(1.1) rotateZ(180deg)`,
      ":before": {
        animationDelay: `0.6s`,
      },
    },

    "sk-cube4": {
      transform: `scale(1.1) rotateZ(270deg)`,
      ":before": {
        animationDelay: `0.9s`,
      },
    },
  },
})
