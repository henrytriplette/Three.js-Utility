/**
 * @return Material
 */

function loadMaterial(jSonObject, envMap, base_path) {

  // Check Base Path
  var path = base_path;
  if( path === undefined ) {
    var path = '';
  }

  // Check envMap
  if( envMap === undefined ) {
    envMap = null;
  }

  var textureLoader = new THREE.TextureLoader();
  var newMaterial = new THREE.MeshStandardMaterial( {
    alphaMap: null,
    aoMap: null,
    aoMapIntensity: 0.95,
    bumpMap: null,
    bumpScale: 0,
    color: 0xFFFFFF,
    displacementMap: null,
    displacementScale: 1,
    displacementBias: 0,
    emissive: 0x000000,
    emissiveIntensity: 0,
    envMap: envMap,
    envMapIntensity: 1,
    lightMap: null,
    lightMapIntensity: 1,
    map: null,
    metalness: 0.5,
    metalnessMap: null,
    refractionRatio: 0.98,
    roughness: 1,
    roughnessMap: null,
    shading: THREE.SmoothShading
  } );

  var maxAnisotropy = 5;

  // Material settings
  if (jSonObject.color) {
    var color = jSonObject.color.replace("#", "0x");
    newMaterial.color = new THREE.Color( parseInt( color , 16) );
  }

  if (jSonObject.transparent) {
    newMaterial.transparent = jSonObject.transparent;
  }

  if (jSonObject.opacity) {
    newMaterial.opacity = jSonObject.opacity;
  }

  // aoMap
  if(jSonObject.aoMap) {
    var aoMap = textureLoader.load( path + jSonObject.aoMap);
      aoMap.wrapS = THREE.RepeatWrapping;
      aoMap.wrapT = THREE.RepeatWrapping;
      aoMap.anisotropy = maxAnisotropy;
      aoMap.repeat.set( jSonObject.repeatX, jSonObject.repeatY );
      newMaterial.aoMap = aoMap;
  }

  // aoMapIntensity
  if(jSonObject.aoMapIntensity) {
    newMaterial.aoMapIntensity = jSonObject.aoMapIntensity;
  }

  // AlphaMap
  if(jSonObject.alphaMap) {
    var alphaMap = textureLoader.load( path + jSonObject.alphaMap);
      alphaMap.wrapS = THREE.RepeatWrapping;
      alphaMap.wrapT = THREE.RepeatWrapping;
      alphaMap.anisotropy = maxAnisotropy;
      alphaMap.repeat.set( jSonObject.repeatX, jSonObject.repeatY );
      newMaterial.alphaMap = alphaMap;
  }

  // bumpMap
  if(jSonObject.bumpMap) {
    var bumpMap = textureLoader.load( path + jSonObject.bumpMap);
      bumpMap.wrapS = THREE.RepeatWrapping;
      bumpMap.wrapT = THREE.RepeatWrapping;
      bumpMap.anisotropy = maxAnisotropy;
      bumpMap.repeat.set( jSonObject.repeatX, jSonObject.repeatY );
      newMaterial.bumpMap = bumpMap;
  }

  // displacementMap
  if(jSonObject.displacementMap) {
    var displacementMap = textureLoader.load( path + jSonObject.displacementMap);
      displacementMap.wrapS = THREE.RepeatWrapping;
      displacementMap.wrapT = THREE.RepeatWrapping;
      displacementMap.anisotropy = maxAnisotropy;
      displacementMap.repeat.set( jSonObject.repeatX, jSonObject.repeatY );
      newMaterial.displacementMap = displacementMap;
  }

  // displacementScale
  if(jSonObject.displacementScale) {
    newMaterial.displacementScale = jSonObject.displacementScale;
  }

  // displacementBias
  if(jSonObject.displacementBias) {
    newMaterial.displacementBias = jSonObject.displacementBias;
  }

  // emissive settings
  if (jSonObject.emissive) {
    var emissive = jSonObject.emissive.replace("#", "0x");
    newMaterial.emissive = new THREE.Color( parseInt( emissive , 16) );
  }

  // emissiveIntensity
  if(jSonObject.emissiveIntensity) {
    newMaterial.emissiveIntensity = jSonObject.emissiveIntensity;
  }

  // envMapIntensity
  if(jSonObject.envMapIntensity) {
    newMaterial.envMapIntensity = jSonObject.envMapIntensity;
  }

  // lightMap
  if(jSonObject.lightMap) {
    var lightMap = textureLoader.load( path + jSonObject.lightMap);
      lightMap.wrapS = THREE.RepeatWrapping;
      lightMap.wrapT = THREE.RepeatWrapping;
      lightMap.anisotropy = maxAnisotropy;
      lightMap.repeat.set( jSonObject.repeatX, jSonObject.repeatY );
      newMaterial.lightMap = lightMap;
  }

  // lightMapIntensity
  if(jSonObject.lightMapIntensity) {
    newMaterial.lightMapIntensity = jSonObject.lightMapIntensity;
  }

  // Map
  if(jSonObject.map) {
    var map = textureLoader.load( path + jSonObject.map );
      map.wrapS = THREE.RepeatWrapping;
      map.wrapT = THREE.RepeatWrapping;
      map.anisotropy = maxAnisotropy;
      map.repeat.set( jSonObject.repeatX, jSonObject.repeatY );
      newMaterial.map = map;
  }

  // Metalness
  if(jSonObject.metalness) {
    newMaterial.metalness = jSonObject.metalness;
  }

  // metalnessMap
  if(jSonObject.metalnessMap) {
    var metalnessMap = textureLoader.load( path + jSonObject.metalnessMap);
      metalnessMap.wrapS = THREE.RepeatWrapping;
      metalnessMap.wrapT = THREE.RepeatWrapping;
      metalnessMap.anisotropy = maxAnisotropy;
      metalnessMap.repeat.set( jSonObject.repeatX, jSonObject.repeatY );
      newMaterial.metalnessMap = metalnessMap;
  }

  // Normal map
  if (jSonObject.normalMap) {
    var normalMap = textureLoader.load( path + jSonObject.normalMap);
      normalMap.wrapS = THREE.RepeatWrapping;
      normalMap.wrapT = THREE.RepeatWrapping;
      normalMap.anisotropy = maxAnisotropy;
      normalMap.repeat.set( jSonObject.repeatX, jSonObject.repeatY );
      newMaterial.normalMap = normalMap;
  }

  // Metalness
  if(jSonObject.roughness) {
    newMaterial.roughness = jSonObject.roughness;
  }

  // roughnessMap
  if(jSonObject.roughnessMap) {
    var roughnessMap = textureLoader.load( path + jSonObject.roughnessMap);
      roughnessMap.wrapS = THREE.RepeatWrapping;
      roughnessMap.wrapT = THREE.RepeatWrapping;
      roughnessMap.anisotropy = maxAnisotropy;
      roughnessMap.repeat.set( jSonObject.repeatX, jSonObject.repeatY );
      newMaterial.roughnessMap = roughnessMap;
  }

  newMaterial.needsUpdate = true;

  return newMaterial;

}
