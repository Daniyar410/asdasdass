import React, { useState } from 'react'
import './State.css'

const State = () => {

    const [num, setNum] = useState(0)
    const [text, setText] = useState('')
    const [img, setImg] = useState(false)
    const [open, setOpen] = useState('OPEN')

    const minus = () => {
        if (num > 0) {
            setNum(num - 1)
        }
    }

    const plus = () => {
        if (num < 10) {
            setNum(num + 1)
        }
    }

    const change = () => {
        setImg(!img)
        setOpen(img ? 'OPEN' : 'CLOSE')
    }

    return (
        <>

            <div className="box">
                <button onClick={change}>{open} IMAGE</button>
                {img && (
                    <img src="https://avatars.mds.yandex.net/i?id=a77df89f6c1df1072ed612b5d924e0d4_l-5477099-images-thumbs&n=13" alt="" />
                )}
            </div>

            <div className="box">
                <h2>{text}</h2>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            </div>


            <div className="box">
                <h2>{num}</h2>
                <button onClick={plus}> + me</button>
                <button onClick={minus}> - me</button>
                <button onClick={() => setNum(num * 2)}> * me</button>
                <button onClick={() => setNum(num / 2)}> / me</button>
                <button onClick={() => setNum(0)}> 0 me</button>
            </div>

        </>
    )
}

export default State