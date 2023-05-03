import * as THREE from 'three';


function loadMesh(x, y, z, r, filePath) {
    // Load the earth texture image
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(filePath);

    // Create a new sphere geometry with a radius of 1 and 32 segments
    const sphereGeometry = new THREE.SphereGeometry(r, 32, 32);

    // Create a new material using the sun texture
    const material = new THREE.MeshBasicMaterial({
    map: texture
    });

    // Create a new mesh using the sphere geometry and material
    const mesh = new THREE.Mesh(sphereGeometry, material);

    // Set the position of the sun mesh
    mesh.position.set(x, y, z);
    return mesh;
}

function loadMeshRing (x, y, z, r, filePath) {
    // const textureLoader = new THREE.TextureLoader();
    // const texture = textureLoader.load(filePath);

    // //const ringGeometry = new THREE.RingGeometry(r, r + 1, 64);
    // const material = new THREE.MeshBasicMaterial({
    //     map: texture,
    //     side: THREE.DoubleSide
    // });

    // const ringGeometry = new THREE.RingGeometry(r, r + 1, 64);
    // var pos = ringGeometry.attributes.position;
    // var v3 = new THREE.Vector3();
    // for (let i = 0; i < pos.count; i++){
    //     v3.fromBufferAttribute(pos, i);
    //     ringGeometry.attributes.uv.setXY(i, v3.length() < 4 ? 0 : 1, 1);
    // }
    
    // const mesh = new THREE.Mesh(ringGeometry, material);
    const texture = new THREE.TextureLoader().load("https://i.postimg.cc/zz7Gr430/saturn-rings-top.png");
      const geometry = new THREE.RingGeometry(r, r + 2, 64);
      var pos = geometry.attributes.position;
      var v3 = new THREE.Vector3();
      for (let i = 0; i < pos.count; i++){
        v3.fromBufferAttribute(pos, i);
        geometry.attributes.uv.setXY(i, v3.length() < 4 ? 0 : 1, 1);
      }
      // adjustRingGeometry(geometry);
    
      const material = new THREE.MeshBasicMaterial({
        map: texture,
        color: 0xffffff,
        side: THREE.DoubleSide,
        transparent: true
      });
      const mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.x = Math.PI / 2;
    mesh.position.set(x, y, z);

    return mesh;
}

export { loadMesh, loadMeshRing };



