import React, { useLayoutEffect, useState } from 'react'
import styled from 'styled-components'

const StyledCanvas = styled.canvas`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
`

const BackgroundAnimation = () => {
  const [ready, setReady] = useState(true)

  //   useLayoutEffect(() => {
  //     const canvas = document.querySelector('#cw')
  //     const ctx = canvas.getContext('2d')
  //     canvas.width = window.innerWidth
  //     canvas.height = window.innerHeight
  //     ctx.lineJoin = 'round'
  //     ctx.lineCap = 'round'
  //     ctx.lineWidth = '50'

  //     let isDrawing = false
  //     let lastX = 0
  //     let lastY = 0
  //     let hue = 0
  //     let direction = true

  //     function draw(e) {
  //       if (!isDrawing) {
  //         return
  //       }
  //       setTimeout(() => {
  //         ctx.beginPath()
  //       }, 2500)
  //       ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`
  //       ctx.moveTo(lastX, lastY)
  //       ctx.lineTo(e.offsetX, e.offsetY)
  //       ctx.stroke()
  //       lastX = e.offsetX
  //       lastY = e.offsetY
  //       //   [lastX, lastY] = [e.offsetX, e.offsetY]
  //       hue++
  //       if (hue >= 360) {
  //         hue = 0
  //       }
  //     }
  //     canvas.addEventListener('mousemove', draw)
  //     canvas.addEventListener('mousedown', e => {
  //       isDrawing = true
  //       lastX = e.offsetX
  //       lastY = e.offsetY
  //     })
  //     canvas.addEventListener('mouseup', () => (isDrawing = true))
  //     canvas.addEventListener('mouseout', () => (isDrawing = false))
  //   })
  useLayoutEffect(() => {
    const canvas = document.getElementById('cw')
    const context = canvas.getContext('2d')
    // context.globalAlpha = 0.5
    // context.globalAlpha = 0

    const cursor = {
      x: innerWidth,
      y: innerHeight,
    }

    const particlesArray = []
    const isDrawing = false
    generateParticles(1)
    setSize()
    anim()

    addEventListener('mousemove', e => {
      cursor.x = e.clientX
      cursor.y = e.clientY
    })

    addEventListener(
      'touchmove',
      e => {
        e.preventDefault()
        cursor.x = e.touches[0].clientX
        cursor.y = e.touches[0].clientY
      },
      { passive: false }
    )

    addEventListener('resize', () => setSize())

    function generateParticles(amount) {
      particlesArray[0] = new Particle(
        innerWidth,
        innerHeight,
        150,
        generateColor(),
        0.0
      )
    }

    function generateColor() {
      const hexSet = '0123456789ABCDEF'
      let finalHexString = '#'
      for (let i = 0; i < 6; i++) {
        finalHexString += hexSet[Math.ceil(Math.random() * 15)]
      }
      return finalHexString
    }

    function setSize() {
      canvas.height = innerHeight
      canvas.width = innerWidth
    }

    function Particle(x, y, particleTrailWidth, strokeColor, rotateSpeed) {
      context.clearRect(0, 0, context.canvas.width, context.canvas.height)
      const duration = (0.7 * (1 * 1000)) / 60 // Last 80% of a frame per point
      let hue = 0
      this.x = x
      this.y = y
      this.particleTrailWidth = particleTrailWidth
      this.strokeColor = strokeColor

      this.theta = Math.random() * Math.PI * 2
      this.rotateSpeed = rotateSpeed
      this.t = Math.random() * 150

      this.rotate = () => {
        const ls = {
          x: this.x,
          y: this.y,
        }
        // this.theta += this.rotateSpeed
        this.x = cursor.x
        this.y = cursor.y
        context.beginPath()
        context.lineWidth = this.particleTrailWidth
        // context.strokeStyle = this.strokeColor
        context.strokeStyle = `hsl(${hue}, 50%, 50%)`
        // context.strokeStyle = generateColor()
        context.lineJoin = 'round'
        context.lineCap = 'round'
        context.shadowBlur = 15

        context.moveTo(ls.x, ls.y)
        context.lineTo(this.x, this.y)
        context.stroke()
        hue++
        if (hue >= 360) {
          hue = 75
        }
      }
    }
    function fadeOut() {
      // context.fillStyle = 'rgba(0,0,0,0.1)'
      context.fillStyle = 'rgba(25, 48, 62 , .9)'
      context.fillRect(0, 0, canvas.width, canvas.height)
      setTimeout(fadeOut, 10000)
      // setTimeout(fadeOut, 1)
    }

    fadeOut()

    function anim() {
      requestAnimationFrame(anim)

      // context.fillStyle = 'rgba(0,0,0,0)'
      context.fillStyle = 'rgba(25, 48, 62 , .1)'
      context.fillRect(0, 0, canvas.width, canvas.height)

      particlesArray.forEach(particle => particle.rotate())
    }
  })
  return (
    <>
      {ready && (
        <StyledCanvas id="cw">
          Animation creating multi-colored disappearing stream of light that
          follow the cursor as it moves over the image
        </StyledCanvas>
      )}
    </>
  )
}

export default BackgroundAnimation
