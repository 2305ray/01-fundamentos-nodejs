export function buildRoutePath(path) {
    const routeParameterRegex = /:([a-zA-Z]+)/g
    const pathWithParams = path.replaceAll(routeParameterRegex, '(?<id>[a-z0-9\-_]+)')

     const pathRegex = new RegExp(`^${ pathWithParams }`) // o ^ diz q ela ja começa com o regex
    
     return pathRegex
    // console.log(Array.from(path.matchAll(routeParameterRegex)))
}