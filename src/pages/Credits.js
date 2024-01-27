import React from 'react';
import Nav from '../Nav'

export default function Credits(){

    return(
        <div>
            <Nav />
            <div className='credits-page'>
                <p id='credits-title'>Credits</p>
                <ul>
                    Images
                    <li id='link-item'> <a id='link' href='https://www.sheetgo.com/templates/finance/expenses-tracker-template'>https://www.sheetgo.com/templates/finance/expenses-tracker-template/</a></li>
                    <li id='link-item'><a id='link' href='https://medium.muz.li/designing-a-finance-tracker-app-be24ad13ea0f'>https://medium.muz.li/designing-a-finance-tracker-app-be24ad13ea0f</a></li>
                    <li id='link-item'><a id='link' href='https://www.vecteezy.com/free-vector/quiz-time'>https://www.vecteezy.com/free-vector/quiz-time</a></li>
                    <p id='link-item'>Inspiration: <a id='link'  href = "https://brittanychiang.com" >https://brittanychiang.com</a></p>
                </ul>
            </div>
        </div>
    )
}
