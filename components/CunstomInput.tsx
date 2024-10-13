import { Input } from "@/components/ui/input";
import React from 'react'
import { FormField, FormLabel, FormControl, FormMessage } from './ui/form'

import{Control, FieldPath, Form} from 'react-hook-form'
import { z } from "zod";
import { authFormSchema } from "@/lib/utils";
 

interface CunstomInput{
    control: Control<z.infer<typeof authFormSchema>>,
    name: FieldPath<z.infer<typeof authFormSchema>>,
    label: string,
    placeholder: string,
}


const CunstomInput = ({control,name,label,placeholder}: CunstomInput) => {
  return (
    <FormField
    control={control}
    name={name}
    render={({ field }) => (
    <div className="form-item">
      <FormLabel className="form-label">
      {label}
      </FormLabel>
      <div className="flex w-full flex-col">
      <FormControl>
        <Input
        placeholder={placeholder}
        className="input-class"
        type={name === 'password' ? 'password' : 'text'}
        {...field}
        />
      </FormControl>
      

      <FormMessage className="form-message mt-2"/>
      </div>

    </div>
    )}
  />
  )
}

export default CunstomInput