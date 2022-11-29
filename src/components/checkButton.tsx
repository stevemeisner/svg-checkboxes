import React, { FC, useState } from 'react'
import { ReactComponent as CheckBox } from '../assets/checkbox.svg'
import '../styles/button.scss'
import '../styles/checkbox.scss'

type CheckButtonProps = {
  buttonText: string
  className?: string
}

const CheckButton: FC<CheckButtonProps> = ({ buttonText, className }) => {
  const [checked, setChecked] = useState(false)

  return (
    <button
      className={className ? `button ${className}` : 'button'}
      onClick={() => setChecked(!checked)}
    >
      <CheckBox
        className={checked ? 'Checkbox Checkbox__checked' : 'Checkbox'}
      />
      {buttonText}
    </button>
  )
}

export default CheckButton
