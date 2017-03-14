var sphereMaterial;

function addSphere(ldrCubeRenderTarget) {

  // Unlit material
  sphereMaterial = new THREE.MeshPhysicalMaterial( {
    color: new THREE.Color( parseInt( '0xFFFFFF' , 16) ),
    side: THREE.FrontSide,
    shading: THREE.SmoothShading,
    metalness: 1,
    roughness: 0,
    envMap: ldrCubeRenderTarget
  });

  // var floor = new THREE.Mesh( new THREE.CircleGeometry( 10, 10, 0, Math.PI * 2 ), material );

  var sphereGeometry = new THREE.SphereGeometry( 15, 32, 32 );
  var sphereMesh = new THREE.Mesh( sphereGeometry, sphereMaterial );
  sphereMesh.position.set( 0, 25, 0 );
  sphereMesh.receiveShadow = true;
  sphereMesh.name = 'Check Sphere';
  scene.add( sphereMesh );

}
