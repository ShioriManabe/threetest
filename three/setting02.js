$(function(){
	//基本設定
	var width = 900;
	var height = 900;

	var renderer = new THREE.WebGLRenderer({
		canvas: document.querySelector("#canvas"),
        alpha: true
	});
	renderer.setPixelRatio(window.devicePixelRatio);
	renderer.setSize(width, height);
	var scene = new THREE.Scene();

	// カメラ設定
	var camera = new THREE.PerspectiveCamera(3,width / height,1,10000);
	camera.position.set(1,300, 500); 
    
    // ライト設定
    ambientLight = new THREE.AmbientLight(0xffffff);
	hemisphereLight = new THREE.HemisphereLight(0xffffff,0x4169e1, 0.15);
	scene.add(hemisphereLight);
	scene.add(ambientLight);

	// マウス操作
	var controls = new THREE.OrbitControls(camera);
    controls.enableZoom = false;
    controls.autoRotate = true;

	// MTL,Obj読み込み
	new THREE.MTLLoader().setPath('./three/')
    .load('table.mtl',
    function(materials){
        materials.preload();
        new THREE.OBJLoader().setPath('./three/').setMaterials(materials).load('table.obj',
              function(object){
                objmodel = object.clone();
                obj = new THREE.Object3D();
                obj.add(objmodel);
                obj.position.set(0, -1.2, 0);
                scene.add(obj);        
            }
        );
    });
    var obj = new THREE.Mesh();

	// 実行
	animate();
    function animate(){
        requestAnimationFrame(animate);
        obj.rotation.y += 0.002;
        renderer.render(scene, camera);
    };

	// 画面リサイズ
	onResize();
	window.addEventListener('resize', onResize);

	function onResize() {
	  var width = window.innerWidth;
	  var height = window.innerHeight;

	  renderer.setPixelRatio(window.devicePixelRatio);
	  renderer.setSize(width, height);

	  camera.aspect = width / height;
	  camera.updateProjectionMatrix();
	}
	});
