var ambientLight, spotLight;

function AddLights() {

    ambientLight = new THREE.AmbientLight( 0xFFFFFF );
    ambientLight.intensity = 0.5;
    ambientLight.name = 'ambientLight';
  	scene.add( ambientLight );

  	spotLight = new THREE.SpotLight( 0xffffff );
  	spotLight.position.set( 0, 100, -200 );
  	spotLight.angle = Math.PI / 7;
    spotLight.intensity = 1;
  	spotLight.penumbra = 0;
  	spotLight.castShadow = true;
    spotLight.name = 'spotLight';

    // Shadow
    spotLight.shadow.mapSize.width = 1024;  // default
    spotLight.shadow.mapSize.height = 1024; // default

  	scene.add( spotLight );

    //Helper
    var spotLightHelper = new THREE.SpotLightHelper( spotLight );
    spotLightHelper.name = 'spotLightHelper';
    spotLight.add( spotLightHelper );

}
