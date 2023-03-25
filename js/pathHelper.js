function updatePath (location, newPath) {
    const currHref = location.href;
    const replaceReg = new RegExp(`^${location.protocol}\/\/.*\/(.*)\$`);
    const currPath = currHref.match(replaceReg);
    if(currPath) window.location.replace(currHref.replace(currPath?.[1], newPath));
}
