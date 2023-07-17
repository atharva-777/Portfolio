import { createClient } from "next-sanity"

const projectId = "k8of7rz5";
const dataset = 'production'
const apiVersion = '2023-01-01'

export const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn:true,
})