import React from 'react';
import ButtonUnstyled, {
  ButtonUnstyledProps,
  useButton,
} from '@mui/base/ButtonUnstyled';
import clsx from 'clsx';
import { styled } from '@mui/system';

const CustomButton = styled(ButtonUnstyled)`
  font-family: IBM Plex Sans, sans-serif;
  font-weight: bold;
  font-size: 0.875rem;
  background-color: var(--primary);
  padding: 12px 24px;
  border-radius: 8px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  border: none;

  &:hover {
    background-color: var(--primary-tint);
  }

  &.active {
    background-color: var(--primary-shade);
  }

  &.focusVisible {
    box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1),
      0 0 0 5px rgba(0, 127, 255, 0.5);
    outline: none;
  }

  &.disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const Button = React.forwardRef(function Button(
  props: ButtonUnstyledProps,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  const { children } = props;
  const { active, disabled, focusVisible, getRootProps } = useButton({
    ...props,
    ref,
  });

  const classes = {
    active,
    disabled,
    focusVisible,
  };

  return (
    <CustomButton {...getRootProps()} className={clsx(classes)}>
      {children}
    </CustomButton>
  );
});

export default Button;
