
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
	camera.position.set(0, 0, 1000);
    
    // ライト設定
    ambientLight = new THREE.AmbientLight(0xffffff);
	hemisphereLight = new THREE.HemisphereLight(0xffffff,0x4169e1, 0.5);
	scene.add(hemisphereLight);
	scene.add(ambientLight);

	// 箱
	var geometry = new THREE.BoxGeometry(10, 10, 10);
	var material = new THREE.MeshStandardMaterial({color: 0xaaaaaa});
	var box = new THREE.Mesh(geometry, material);
	scene.add(box);

	// 実行
	animate();
    function animate(){
        renderer.render(scene, camera);
    };
	

	});
