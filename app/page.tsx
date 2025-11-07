"use client"
import { useEffect } from 'react'
import * as THREE from "three"
import { GLTFLoader } from 'three/examples/jsm/Addons.js'



function App() {

  useEffect(() => {

    let model: THREE.Group
    const canvas = document.getElementById("canvas") as HTMLCanvasElement
    //scene 
    const scene: THREE.Scene = new THREE.Scene()

    const width = window.innerWidth
    const height = window.innerHeight

    //camera
    const camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera(
      75, width / height, 0.1, 1000)

    camera.position.set(0, 5, 9)


    //renderer
    const renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
      alpha: true,
    })

    renderer.setSize(width, height)

    renderer.setPixelRatio(window.devicePixelRatio);

    //gltf 3dモデルインポート
    const gltfLoader = new GLTFLoader()
    let mixer: THREE.AnimationMixer

    gltfLoader.load("./models/scene.gltf", (gltf) => {
      model = gltf.scene
      model.scale.set(2, 2, 2)

      scene.add(model)


      //アニメーション
      mixer = new THREE.AnimationMixer(model)
      const clips = gltf.animations;
      clips.forEach(function (clip) {
        const action = mixer.clipAction(clip)
        action.play()
      })


    })



    const ambientLight = new THREE.AmbientLight(0xffffff, 1)
    scene.add(ambientLight)

    //  const pointLight = new THREE.PointLight(0xffffff,300,30)
    //  scene.add(pointLight)

    const tick = () => {
      renderer.render(scene, camera)

      if (mixer) {
        mixer.update(0.01)
      }
      requestAnimationFrame(tick)
    }
    tick()

  }, [])

  return (
    <div >
      <canvas id='canvas' className='h-[100%] relative bg-[linear-gradient(90deg,rgba(42,123,155,1)_0%,rgba(83,192,135,1)_45%,rgba(87,199,133,1)_50%,rgba(237,221,83,1)_100%)]' ></canvas>

      <div className='mainContent absolute top-[40%] left-[10%] flex flex-col gap-10 text-white' >
        <h1 className='text-6xl font-bold'>Ryusei Teramoto</h1>
        <p className='text-2xl'>Web developer / Front-end engineer</p>
      </div>

      <div className="absolute bottom-[1%] right-[1%] text-gray-800">
        <p className='text-xs '>
          3D model: "Old Computers" by Rafael Rodrigues (CC BY 4.0)
        </p>
      </div>

    </div>
  )

}

export default App
