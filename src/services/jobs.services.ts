import { JobsRepository } from "../repository";
import { Job } from "../models";
import { cannotGetAllJobs } from '../errors';

async function getAllJobs(): Promise<Job[]> {
    const jobsList = JobsRepository.getAllJobs();

    if (!jobsList) {
        throw cannotGetAllJobs;
    };

    return jobsList;
};

export const JobsService = {
    getAllJobs
};