const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 16 * 64
canvas.height = 9 * 64

const player = new Player()

function animate(){
    window.requestAnimationFrame(animate)
    c.fillStyle = "white"
    c.fillRect(0,0,canvas.width,canvas.height)

    player.draw()
    player.update()

    window.addEventListener("keydown", (e) =>{
        switch(e.key){
            case 'w':
                if(player.velocity.y === 0) player.velocity.y = -20
                break
        }
    })
}

animate()