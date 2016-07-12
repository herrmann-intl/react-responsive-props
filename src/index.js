import React from 'react'
import _ from 'lodash'

export default function(component, matchMediaQueries){
  return class ResponsiveProps extends React.Component{
    _onResize(){
      this.forceUpdate()
    }

    constructor(props){
      super()
      this._onResize = this._onResize.bind(this)
    }

    componentDidMount(){
      window.addEventListener("resize", this._onResize)
    }

    componentWillUnmount(){
      window.removeEventListener("resize", this._onResize)
    }

    render(){
      const resposiveProps = _.mapValues(matchMediaQueries, query=> window.matchMedia(query).matches)
      const props = _.defaults(resposiveProps,this.props)
      return React.createElement(component, props)
    }
  }
}
