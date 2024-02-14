interface ButtonProps {
  title: string
  fill?: true
  className?: string
}

const Button = ({ title, fill, className}: ButtonProps) => {
  return (
    <button className={`rounded-full items-center px-16 py-3 w-fit font-medium text-sm transition-colors ${fill ? 'bg-primary text-white hover:bg-transparent hover:outline hover:outline-primary hover:text-primary' : 'outline hover:bg-primary  hover:outline-none'} ` + className}>
      {title}
    </button>
  )
}

export default Button