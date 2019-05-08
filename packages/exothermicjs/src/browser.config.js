export default () => import('../exothermic.config')
  .then(defConfig => //console.log(defConfig)
    import('../../../exothermic.config')
      .then(userConfig => { return {...defConfig, ...userConfig} })
      .catch(() => defConfig)
  )
  .catch((error) => {
    console.error(error)
    return {}
  })
