
export default function Input(props) {
  return (
    <div>
      <label htmlFor={props.id} className="block text-sm font-bold text-white">
        {props.label}
      </label>
      <div className="relative mt-1 rounded-md shadow-sm max-w-[450px]">
        <input
          type={props.type}
          name={props.id}
          className=
            {
                `${props.disabled && 'pointer-events-none opacity-80'} 
                ${props.error ? 'text-red-900 ring-red-300 placeholder:text-red-300' : 'text-white ring-primary placeholder:text-white/60'} 
                bg-transparent block w-full rounded-md border-0 py-1.5 pl-3 pr-10 ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6`
            }
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onchange}
        />
        <div className={`${!props.error && 'hidden'} absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none`}>
          {props.errorTrailingIcon}
        </div>
        <div className={`!${props.type === 'password' && 'hidden'} ${props.disabled && 'pointer-events-none'} absolute z-20 inset-y-0 right-0 flex items-center pr-3 cursor-pointer`}>
          {props.trailingIcon}
        </div>
      </div>
      <p className={`${!props.error && 'hidden'} mt-2 text-sm text-red-600" id="email-error`}>
        {props.errorMsg}
      </p>
    </div>
  )
}
