import React from 'react'
import styled from 'styled-components'
// import useRequestData from '../hooks/useRequestData'
// import { Base_url } from '../Constants/url'

const Title = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  align: center;
  letter-spacing: -0.39px;
  color: black;
  width: 4.25rem;
  height: 1.188rem;
  margin: 1.25rem 5.75rem 0 5.813rem;
  padding: 0.813rem 3.344rem 0.75rem;
  display: inline-block;
`

const Text = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  align: center;
  letter-spacing: -0.39px;
  color: black;
  width: 20.5rem;
  height: 1.125rem;
  margin: 1rem 1rem 0.5rem;
  display: inline-block;
`

const Info1 = styled.div`
  display: flex;
`
const ButtonEdit = styled.div`
  display: flex;
`

export default function UserProfile() {
  // const profile = useRequestData(`${Base_url}/profile`)

  return (
    <div>
      <Title>Meu perfil</Title>
      <hr size="1" width="100%" color="#f9f5f7" />
      {/* <NameText>{profile.user.name}</NameText> */}
      <Info1>
        <Text>Bruna Oliveira</Text>
        <Text>bruna_o@gmailcom</Text>
        <Text>333.333.333-33</Text>
      </Info1>
      <ButtonEdit>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <defs>
            <path id="a" d="M0 0h16v16H0z" />
          </defs>
          <g fill="none" fill-rule="evenodd" transform="translate(4 4)">
            <mask id="b" fill="#fff"></mask>
            <path
              fill="#000"
              d="M9.83 2.836L0 12.666V16h3.333l9.83-9.831L9.83 2.836M13.03 0a.89.89 0 0 0-.623.258l-1.626 1.626 3.333 3.334L15.74 3.59a.885.885 0 0 0 0-1.253L13.66.258A.873.873 0 0 0 13.03 0m-3.2 5.351l.817.818-8.052 8.053h-.817v-.818L9.83 5.351"
              mask="url(#b)"
            />
          </g>
        </svg>
      </ButtonEdit>
    </div>
  )
}
