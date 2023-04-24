import { Job } from "../models";

async function getAllJobs(): Promise<Job[]> {

    const jobs = [
        {
            id: 1,
            title: "teste",
            description: "descrição teste",
            companyName: "Amarelinho",
            cityName: "São Paulo",
            stateName: "São Paulo",
            createdAt: new Date(),
            updatedAt: null
        },
        {
            id: 2,
            title: "programador",
            description: "descrição programador",
            companyName: "Azulzinho",
            cityName: "Rio de Janeiro",
            stateName: "Rio de Janeiro",
            createdAt: new Date(),
            updatedAt: null
        },
        {
            id: 3,
            title: "analista",
            description: "descrição analista",
            companyName: "Verdinho",
            cityName: "Belo Horizonte",
            stateName: "Minas Gerais",
            createdAt: new Date(),
            updatedAt: null
        },
        {
            id: 4,
            title: "designer",
            description: "descrição designer",
            companyName: "Roxinho",
            cityName: "Porto Alegre",
            stateName: "Rio Grande do Sul",
            createdAt: new Date(),
            updatedAt: null
        }
    ];

    const jobsList = jobs;
    return jobsList;
};

export const JobsRepository = {
    getAllJobs
};