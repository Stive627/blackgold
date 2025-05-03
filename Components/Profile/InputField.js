import React from 'react'

function InputField({detail}) {
  return (
    <div>
        <p className=' font-semibold pb-1'>{detail.label}</p>
        {
            detail.userInfo.edit ?
                <input name={detail.name} value={detail.value} placeholder={detail.placeholder} onChange={(e) =>detail.setUserInfo({...detail.userInfo, [detail.name]:e.target.value})} className=' w-full border border-gray-300 py-1 px-2 rounded-lg pt-1 outline-gray-400'/>
                :
                <p className={`border border-gray-300 py-1 px-2 rounded-md ${!detail.value && 'h-8'}`}>{detail.value}</p>
        }
    </div>
  )
}

export default InputField
