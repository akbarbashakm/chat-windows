/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

// styled.input.attrs({ type: "checkbox" })`
const Root = styled.div`
    padding: 0px 12px;
    background: cornflowerblue;
    color: white;
    font-size: 1rem;
    border-radius: 8px;
    visibility: hidden;
    position: fixed;
    right: calc(50% - 100px);
    bottom: 20px;
    z-index: 1000;
    ${(props) => props.isVisible &&
        css`
        visibility: visible;
        -webkit-animation: fadein 0.5s;
        animation: fadein 0.5s;
    `
    }
  ${(props) => !props.isVisible &&
        css`
        visibility: hidden;
        -webkit-animation: fadeout 0.5s 2.5s;
        animation: fadeout 0.5s 2.5s;
    `
    }
  @-webkit-keyframes fadein {
      from { bottom: 0px; }
      to { bottom: 20px; }
  }

  @keyframes fadein {
      from { bottom: 0px; }
      to { bottom: 20px; }
  }

  @-webkit-keyframes fadeout {
      from { bottom: 20px; }
      to { bottom: -300px; }
  }

  @keyframes fadeout {
      from { bottom: 20px; }
      to { bottom: -300px; }
  }
`;

const Toast = ({
    toastMessage
}) => {
    const [value, setValue] = useState('');

    useEffect(() => {
        if (value !== toastMessage) {
            setValue(toastMessage);
            setTimeout(() => {
                setValue('');
            }, 5000)
        }
    }, [toastMessage]);

    return (
        <Root isVisible={!!value}>
            <p>{value}</p>
        </Root>
    )
}

export default Toast;