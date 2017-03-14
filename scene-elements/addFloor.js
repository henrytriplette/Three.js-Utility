var floorMaterial, floorShadowMaterial;

function addFloor() {

  var floorShadowGeometry = new THREE.PlaneGeometry( 512, 512 );
  floorShadowGeometry.rotateX( - Math.PI / 2 );

  floorShadowMaterial = new THREE.ShadowMaterial();
  floorShadowMaterial.opacity = 0.05;

  var floorShadowMesh = new THREE.Mesh( floorShadowGeometry, floorShadowMaterial );
  floorShadowMesh.position.y = 0.5;
  floorShadowMesh.receiveShadow = true;
  scene.add( floorShadowMesh );

  var map = new THREE.TextureLoader().load( 'assets/components/materials/floor/floor_Map_01.jpg' );
  map.wrapS = map.wrapT = THREE.RepeatWrapping;
  map.anisotropy = 16;

  // Unlit material
  floorMaterial = new THREE.MeshBasicMaterial( {
    color: new THREE.Color( parseInt( '0xFFFFFF' , 16) ),
    map: map,
    side: THREE.FrontSide,
    shading: THREE.SmoothShading
  });

  // var floor = new THREE.Mesh( new THREE.CircleGeometry( 10, 10, 0, Math.PI * 2 ), material );

  var planeGeometry = new THREE.PlaneBufferGeometry( 512, 512 );
  var floorMesh = new THREE.Mesh( planeGeometry, floorMaterial );
  floorMesh.position.set( 0, 0, 0 );
  floorMesh.rotateX( - Math.PI / 2 );
  floorMesh.receiveShadow = false;
  floorMesh.name = 'Floor';
  scene.add( floorMesh );

}
