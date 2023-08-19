const router = require('express').Router()

const { PrismaClient } = require('@prisma/client')
const myprisma = new PrismaClient()

module.exports = myprisma