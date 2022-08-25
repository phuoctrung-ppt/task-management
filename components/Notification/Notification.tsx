/* eslint-disable react-hooks/exhaustive-deps */
import styled from 'styled-components';
import { color } from '../../utils';
import { OverrideProps } from '../../utils/interface';
import * as Icons from '../Icons';
type NotificationType = {
  message?: string;
  type: 'success' | 'warning' | 'error';
  onClose?: () => void;
};

const TYPE_MAPPING: { [key: string]: { [key: string]: string | React.ReactElement } } = {
  success: {
    backgroundColor: color.greenLight,
    borderColor: color.greenDark,
    icon: <Icons.Subtract color={color.green} />,
  },
  warning: {
    backgroundColor: color.yellowLight,
    borderColor: color.yellow,
    icon: <Icons.Warning color={color.yellow} />,
  },
  error: {
    backgroundColor: color.redLight,
    borderColor: color.redDark,
    icon: <Icons.Warning color={color.red} />,
  },
};

const StyledNotification = styled.div<NotificationType>`
  ${({ type }) => {
    const { backgroundColor, borderColor } = TYPE_MAPPING[type ?? 'success'];
    return `background-color: ${backgroundColor};
   border: 1px solid ${borderColor};
   `;
  }}
  display: flex;
  align-items: center;
  border-radius: 0.25rem;
  padding: 1rem;
  margin-bottom: 1.5rem;
  box-shadow: 0px 1px 4px rgba(205, 207, 209, 0.5);
  animation: in 0.2s ease-out;
  @keyframes in {
    0% {
      opacity: 0;
      transform: translateX(100%);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;
const StyledContent = styled.p`
  color: #333333;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;

const CloseButton = styled.button`
  background: none;
  outline: none;
  border: none;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 1.5rem;
  height: 1.5rem;

  :hover {
    opacity: 0.5;
  }
`;

const Notification = (props: OverrideProps<NotificationType>) => {
  const { icon } = TYPE_MAPPING[props.type];

//   useEffect(() => {
//     const timeout = setTimeout(() => props.onClose && props.onClose(), 3000);
//     return () => clearTimeout(timeout);
//   }, [props.onClose]);

  return (
    <StyledNotification type={props.type}>
      {icon}
      <div style={{ flex: 1 }}>
        <StyledContent>{props.message}</StyledContent>
      </div>
      <CloseButton onClick={props.onClose}>
        <Icons.Cross color={color.gray2} />
      </CloseButton>
    </StyledNotification>
  );
};

export default Notification;
