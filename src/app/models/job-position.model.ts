export class JobPosition {
    _id: string;
    name: string;
    level: string;
    jobAreaId: string;

    public static urlSearchParamsPost(
        jobPositons: Array<JobPosition>,
        jobAreaId: any,
        creatorId: any
    ) {

        const body = new URLSearchParams();

        body.set('jobAreaId', jobAreaId);
        body.set('creatorId', creatorId);

        for (let i = 0; i < jobPositons.length; i++) {

            body.set('positions[' + i + '][name]', jobPositons[i].name);
            body.set('positions[' + i + '][level]', jobPositons[i].level);
        }

        return body;
    }

    public static urlSearchParamsPut(
        jobPosition: JobPosition,
        modifierId
    ) {
        const body = new URLSearchParams();

        body.set('_id', jobPosition._id);
        body.set('modifierId', modifierId);
        body.set('name', jobPosition.name);
        body.set('level', jobPosition.level);
        body.set('jobAreaId', jobPosition.jobAreaId);

        return body;
    }
}
