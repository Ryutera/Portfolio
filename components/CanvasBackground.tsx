"use client"
import React from 'react'
import { useEffect } from 'react'
import * as THREE from "three"
import { GLTFLoader } from 'three/examples/jsm/Addons.js'

const CanvasBackground = () => {
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
   <>
    <canvas
        id="canvas"
        className="fixed top-0 left-0 w-full h-full z-0 bg-[linear-gradient(90deg,rgba(42,123,155,1)_0%,rgba(83,192,135,1)_45%,rgba(87,199,133,1)_50%,rgba(237,221,83,1)_100%)]"
      />
      </>
  )
}

export default CanvasBackground
