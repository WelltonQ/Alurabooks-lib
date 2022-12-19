import React from 'react'
import styled from 'styled-components'

const ButtonStyledss = styled.button`
    background: #EB9B00;
    padding: 16px 32px;
    border: 2px solid #EB9B00;
    color: #FFF;
    font-size: 20px;
    cursor: pointer;
    &:hover {
        background: #BB7900;
        border: 2px solid #EB9B00;
    }
`

export const AbButton = () => {
    return (
        <ButtonStyledss>
            Clique aqui!
        </ButtonStyledss>
    )
}