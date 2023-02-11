import styled from "styled-components";

export const Container = styled.aside`
  min-width: 207px;
  height: 800px;
  background-color: #a476a8;
  border-radius: 8px;


  .logo{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

  }

  strong {
    font-size: 52px;
    background: linear-gradient(157deg, rgba(54,96,203,1) 57%, rgba(6,14,191,1) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  span {
    background: linear-gradient(157deg, rgba(251,251,251,1) 0%, rgba(214,223,0,1) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 32px;
  }
`

export const InputContainer = styled.div`
  position: relative;
  margin: 24px 8px 40px 8px;

  input {
    width: 100%;
    border: none;
    outline: none;
    border-radius: 8px;
    height: 22px;
    padding: 16px;
    opacity: 0.3;
    color: #a783b3;
    font-size: 13px;

    &::placeholder {
      font-size: 10px;
    }
  }

  img {
    width: 8%;
    position: absolute;
    left: 1px;
    top: 9px;
    z-index: 10;
  }
`

export const MenuContainer = styled.div`
  margin-top: 64px;

  h2 {
    color: ${({ theme }) => theme.colors.purple.main};
    margin-left: 16px;
    margin-bottom: 8px;
  }

  ul{
    list-style: none;

    a {
      text-decoration: none;
    }

    li {
      height: 38px;
      padding-left: 16px;
      padding-top: 8px;
      color: ${({ theme }) => theme.colors.purple.light};
      cursor: pointer;

      &:hover {
        background-color: ${({ theme }) => theme.colors.purple.main};
      }
    }
  }
`

export const Line = styled.div`
  width: 100%;
  border: 2px solid #bca0c4;
`
