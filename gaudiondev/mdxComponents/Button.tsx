'use client';

interface ButtonProps{
    text: string
}

const Button = ({ text }: ButtonProps) => {
    return (
      <button
        className="btn btn-primary"
        onClick={event => (event.target as HTMLElement).innerText = 'You clicked me!'}
      >
        {text}
      </button>
    )
  }
  export default Button