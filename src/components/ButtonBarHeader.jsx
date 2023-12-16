import React from 'react'

export default function ButtonBarHeader() {
    return (
        <>
            <a href='/#skills' onClick={() => clickMenuHam()}>
                Знания
            </a>
            <a href='/#works' onClick={() => clickMenuHam()}>
                Работы
            </a>
            <a href='/#hireme' onClick={() => clickMenuHam()}>
                Связь со мной
            </a>
        </>
    )
}
