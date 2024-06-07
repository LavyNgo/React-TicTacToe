import React, { useState, useRef } from 'react'
import styles from './css/TicTacToe.module.css'
import circleIcon from '../assets/circle.png'
import crossIcon from '../assets/cross.png'

let data = ["", "", "", "", "", "", "", "", ""]

export const TicTacToe = () => {

    let [count, setCount] = useState(0)
    const [lock, setLock] = useState(false)

    const titleRef = useRef(null)
    let box1 = useRef(null)
    let box2 = useRef(null)
    let box3 = useRef(null)
    let box4 = useRef(null)
    let box5 = useRef(null)
    let box6 = useRef(null)
    let box7 = useRef(null)
    let box8 = useRef(null)
    let box9 = useRef(null)
    let boxArray = [box1, box2, box3, box4, box5, box6, box7, box8, box9]

    const toggle = (e, num) => {
        if (lock) {
            return 0
        }
        // if it is a even number, X
        if (count % 2 === 0) {
            e.target.innerHTML = `<img src='${crossIcon}'>`
            data[num] = 'x'
            setCount(++count)
        }
        // else O
        else {
            e.target.innerHTML = `<img src='${circleIcon}'>`
            data[num] = 'o'
            setCount(++count)
        }

        checkWin()
    }

    const checkWin = () => {
        if (data[0] === data[1] && data[1] === data[2] && data[2] !== '') {
            victory(data[2]) // passing the winning element
        }
        else if (data[3] === data[4] && data[4] === data[5] && data[5] !== '') {
            victory(data[5])
        }
        else if (data[6] === data[7] && data[7] === data[8] && data[8] !== '') {
            victory(data[8])
        }
        else if (data[0] === data[3] && data[3] === data[6] && data[6] !== '') {
            victory(data[6])
        }
        else if (data[1] === data[4] && data[4] === data[7] && data[7] !== '') {
            victory(data[7])
        }
        else if (data[2] === data[5] && data[5] === data[8] && data[8] !== '') {
            victory(data[8])
        }
        else if (data[0] === data[4] && data[4] === data[8] && data[8] !== '') {
            victory(data[8])
        }
        else if (data[2] === data[4] && data[4] === data[6] && data[6] !== '') {
            victory(data[6])
        }
    }

    const victory = (winner) => {
        setLock(true)
        if (winner === 'x') {
            titleRef.current.innerHTML = `Congrats: <img src='${crossIcon}'>`
        }
        else {
            titleRef.current.innerHTML = `Congrats: <img src='${circleIcon}'>`
        }
    }

    const reset = () => {
        setLock(false)
        data = ["", "", "", "", "", "", "", "", ""]
        titleRef.current.innerHTML = `TicTacToe Game In <span>React</span>`
        boxArray.map((e) => {
            e.current.innerHTML = ''
        })
    }

    return (
        <section id='tictactoe' className={styles.container}>
            <h1 ref={titleRef}>TicTacToe Game In <span>React</span></h1>
            <div className={styles.boardContainer}>
                <div className="row1">
                    <div className={styles.box} ref={box1} onClick={(e) => { toggle(e, 1) }}></div>
                    <div className={styles.box} ref={box2} onClick={(e) => { toggle(e, 2) }}></div>
                    <div className={styles.box} ref={box3} onClick={(e) => { toggle(e, 0) }}></div>
                </div>
                <div className="row2">
                    <div className={styles.box} ref={box4} onClick={(e) => { toggle(e, 4) }}></div>
                    <div className={styles.box} ref={box5} onClick={(e) => { toggle(e, 5) }}></div>
                    <div className={styles.box} ref={box6} onClick={(e) => { toggle(e, 3) }}></div>
                </div>
                <div className="row3">
                    <div className={styles.box} ref={box7} onClick={(e) => { toggle(e, 6) }}></div>
                    <div className={styles.box} ref={box8} onClick={(e) => { toggle(e, 7) }}></div>
                    <div className={styles.box} ref={box9} onClick={(e) => { toggle(e, 8) }}></div>
                </div>
            </div>
            <button className="resetBtn" onClick={() => { reset() }}>Reset</button>
        </section>
    )
}

