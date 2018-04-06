import { JobPosition } from 'app/models/job-position.model';

export class JobArea {
    areaName: string;
    adscription: string;
    _id: string;
    positions: Array<JobPosition>;

    public static urlSearchParamsPost(
        jobAreas: Array<JobArea>,
        adscriptionName: string,
        creatorId: string
    ) {

        const body = new URLSearchParams();

        body.set('adscriptionName', adscriptionName);
        body.set('creatorId', creatorId);

        for (let jobAreaIndex = 0; jobAreaIndex < jobAreas.length; jobAreaIndex++) {
            body.set('areaNames[' + jobAreaIndex + ']', jobAreas[jobAreaIndex].areaName);
        }

        return body;
    }

    public static urlSearchParamsPut(
        jobArea: JobArea,
        adscriptionName: string,
        modifierId: string
    ) {

        const body = new URLSearchParams();

        body.set('adscriptionName', adscriptionName);
        body.set('modifierId', modifierId);
        body.set('areaName', jobArea.areaName);
        body.set('_id', jobArea._id);

        return body;
    }
}
