import styled from "styled-components";

export const Container = styled.div`
  /* width: 100%; */
  display: flex;
  gap: 32px;

  .cards-daily {
    height: 100%;
  }

  .cards-secondary {
    display: flex;
    flex-direction: column;
    gap: 16px;


    .card-today {
      background-color: ${({ theme }) => theme.colors.purple.main};
      border-radius: 16px;
      padding: 32px;
      display: flex;
      flex-grow: 1;

      .infos {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .temperature {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }

    .card-infos-weather {
      background-color: ${({ theme }) => theme.colors.purple.light};
      border-radius: 16px;
      padding: 32px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      flex-grow: 1;
    }
  }
`
