import dotenv from 'dotenv'
dotenv.config()
export const DEVELOPMENT = process.env.DEVELOPMENT === 'development'
export const TEST = process.env.TEST === "test"
export const SERVER_HOSTNAME = process.env.SERVERHOSTNAME ||'localhost'
export const SERVER_PORT  = process.env.SEVER_PORT ? Number(process.env.SERVER_PORT):12345

export const server  = {
    SERVER_HOSTNAME,
    SERVER_PORT
}