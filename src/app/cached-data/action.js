'use server'

import { revalidateTag } from "next/cache"
import { redirect } from "next/navigation"

export async function clearTimestampCache(){
    revalidateTag('timestamp');
    redirect('/cached-data');
}