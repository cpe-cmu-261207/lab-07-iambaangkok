import { Store } from 'pullstate'

type PixelPainterStoreType = {
    //we save painted color as hex code (string) in 2D array
    canvas: string[][]
    selectedColor: string;
}

//return an (16 x 16) 2D array filled with "#FFFFFF"
const createEmptyCanvas = () => {
    const output: string[][] = []
    for (let i = 0; i < 16; i++) {
        output[i] = []
        for (let j = 0; j < 16; j++) {
            output[i].push('#FFFFFF')
        }
    }
    return output
}

const createRandomColorCanvas = () =>{
    var colorSet = ['#000000','#804000','#FE0000','#FE6A00','#FFD800','#00FF01',
                '#FFFFFF','#01FFFF','#0094FE','#0026FF','#B100FE','#FF006E'];

    const output: string[][] = []
    for (let i = 0; i < 16; i++) {
        output[i] = []
        for (let j = 0; j < 16; j++) {
            const r = 0;
            output[i].push(colorSet[Math.floor(Math.random() * 12)%12])
            console.log(r);
        }
    }
    return output
}

export const PixelPainterStore = new Store<PixelPainterStoreType>({
    canvas: createEmptyCanvas(),
    selectedColor: "#FFFFFF"
})

export const setSelectedColor = (color: string) => {
    PixelPainterStore.update(s => {
        s.selectedColor = color;
    })
}

export const clearCanvas = () =>{
    PixelPainterStore.update(s => {
        s.canvas = createEmptyCanvas();
    })
}

export const randomColorCanvas = () =>{
    PixelPainterStore.update(s => {
        s.canvas = createRandomColorCanvas();
    })
}

export const setCellColor = (i: number, j: number) =>{
    PixelPainterStore.update(s =>{
        s.canvas[i][j] = s.selectedColor;
    })
}