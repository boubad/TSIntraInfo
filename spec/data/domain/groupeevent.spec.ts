//groupeevent.spec.ts
//
/// <reference path='../../../src/typings/jasmine/jasmine.d.ts' />;
//
import GroupeEvent = require('../../../src/data/domain/groupeevent');
//
describe('GroupeEvent Tests', () => {
  //
  var type:string = 'groupeevent';
  var colname:string = 'groupeevents';
  // empty constructor
  describe(" empty constructor", () => {
    var data: GroupeEvent;
    beforeEach(() => {
      data = new GroupeEvent();
    });
    it(" id property ", () => {
      expect(data.id).toBeDefined();
      expect(data.id).toBeNull();
      expect(data.has_id).toBeDefined();
      expect(data.has_id).toEqual(false);
    });
    it(" rev property ", () => {
      expect(data.rev).toBeDefined();
      expect(data.rev).toBeNull();
      expect(data.has_rev).toBeDefined();
      expect(data.has_rev).toEqual(false);
    });
    it(" remarks property ", () => {
      expect(data.remarks).toBeDefined();
      expect(data.remarks).toBeNull();
      expect(data.has_remarks).toBeDefined();
      expect(data.has_remarks).toEqual(false);
    });
    it(" avatarid property ", () => {
      expect(data.avatarid).toBeDefined();
      expect(data.avatarid).toBeNull();
      expect(data.has_avatarid).toBeDefined();
      expect(data.has_avatarid).toEqual(false);
    });
    it(" departementid property ", () => {
      expect(data.departementid).toBeDefined();
      expect(data.departementid).toBeNull();
      expect(data.has_departementid).toBeDefined();
      expect(data.has_departementid).toEqual(false);
    });
    it(" anneeid property ", () => {
      expect(data.anneeid).toBeDefined();
      expect(data.anneeid).toBeNull();
      expect(data.has_anneeid).toBeDefined();
      expect(data.has_anneeid).toEqual(false);
    });
    it(" semestreid property ", () => {
      expect(data.semestreid).toBeDefined();
      expect(data.semestreid).toBeNull();
      expect(data.has_semestreid).toBeDefined();
      expect(data.has_semestreid).toEqual(false);
    });
    it(" groupeid property ", () => {
      expect(data.groupeid).toBeDefined();
      expect(data.groupeid).toBeNull();
      expect(data.has_groupeid).toBeDefined();
      expect(data.has_groupeid).toEqual(false);
    });
    it(" personid property ", () => {
      expect(data.personid).toBeDefined();
      expect(data.personid).toBeNull();
      expect(data.has_personid).toBeDefined();
      expect(data.has_personid).toEqual(false);
    });
    it(" uniteid property ", () => {
      expect(data.uniteid).toBeDefined();
      expect(data.uniteid).toBeNull();
      expect(data.has_uniteid).toBeDefined();
      expect(data.has_uniteid).toEqual(false);
    });
    it(" matiereid property ", () => {
      expect(data.matiereid).toBeDefined();
      expect(data.matiereid).toBeNull();
      expect(data.has_matiereid).toBeDefined();
      expect(data.has_matiereid).toEqual(false);
    });
    it(" date property ", () => {
      expect(data.date).toBeDefined();
      expect(data.date).toBeNull();
      expect(data.has_date).toBeDefined();
      expect(data.has_date).toEqual(false);
    });
    it(" genre property ", () => {
      expect(data.genre).toBeDefined();
      expect(data.genre).toBeNull();
      expect(data.has_genre).toBeDefined();
      expect(data.has_genre).toEqual(false);
    });
    it(" status property ", () => {
      expect(data.status).toBeDefined();
      expect(data.status).toBeNull();
      expect(data.has_status).toBeDefined();
      expect(data.has_status).toEqual(false);
    });
    it(" documentids property ", () => {
      expect(data.documentids).toBeDefined();
      expect(data.documentids).toBeNull();
      expect(data.has_documentids).toBeDefined();
      expect(data.has_documentids).toEqual(false);
    });
    it(" profaffectationid property ", () => {
      expect(data.profaffectationid).toBeDefined();
      expect(data.profaffectationid).toBeNull();
      expect(data.has_profaffectationid).toBeDefined();
      expect(data.has_profaffectationid).toEqual(false);
    });
    it(" enseignantid property ", () => {
      expect(data.enseignantid).toBeDefined();
      expect(data.enseignantid).toBeNull();
      expect(data.has_enseignantid).toBeDefined();
      expect(data.has_enseignantid).toEqual(false);
    });
    it(" name property ", () => {
      expect(data.name).toBeDefined();
      expect(data.name).toBeNull();
      expect(data.has_name).toBeDefined();
      expect(data.has_name).toEqual(false);
    });
    it(" location property ", () => {
      expect(data.location).toBeDefined();
      expect(data.location).toBeNull();
      expect(data.has_location).toBeDefined();
      expect(data.has_location).toEqual(false);
    });
    it(" coefficient property ", () => {
      expect(data.coefficient).toBeDefined();
      expect(data.coefficient).toBeNull();
      expect(data.has_coefficient).toBeDefined();
      expect(data.has_coefficient).toEqual(false);
    });
    it(" startTime property ", () => {
      expect(data.startTime).toBeDefined();
      expect(data.startTime).toBeNull();
      expect(data.has_startTime).toBeDefined();
      expect(data.has_startTime).toEqual(false);
    });
    it(" endTime property ", () => {
      expect(data.endTime).toBeDefined();
      expect(data.endTime).toBeNull();
      expect(data.has_endTime).toBeDefined();
      expect(data.has_endTime).toEqual(false);
    });
    it(" type property ", () => {
      expect(data.type).toEqual(type);
      expect(data.has_type).toEqual(true);
    });
    it(" collection_name property ", () => {
      expect(data.collection_name).toEqual(colname);
      expect(data.has_collection_name).toEqual(true);
    });
    it(" is_storeable property ", () => {
      expect(data.is_storeable).toBeDefined();
      expect(data.is_storeable).toEqual(false);
    });
    it(" to_insert_map ", () => {
      expect(data.to_insert_map).toBeDefined();
      var oMap: any = {};
      data.to_insert_map(oMap);
      expect(oMap._id).not.toBeDefined();
      expect(oMap._rev).not.toBeDefined();
      expect(oMap.type).toEqual(type);
      expect(oMap.remarks).not.toBeDefined();
      expect(oMap.avatarid).not.toBeDefined();
      expect(oMap.departementid).not.toBeDefined();
      expect(oMap.anneeid).not.toBeDefined();
      expect(oMap.semestreid).not.toBeDefined();
      expect(oMap.groupeid).not.toBeDefined();
      expect(oMap.uniteid).not.toBeDefined();
      expect(oMap.matiereid).not.toBeDefined();
      expect(oMap.documentids).not.toBeDefined();
      expect(oMap.date).not.toBeDefined();
      expect(oMap.genre).not.toBeDefined();
      expect(oMap.status).not.toBeDefined();
      expect(oMap.profaffectationid).not.toBeDefined();
      expect(oMap.enseignantid).not.toBeDefined();
      expect(oMap.name).not.toBeDefined();
      expect(oMap.location).not.toBeDefined();
      expect(oMap.coefficient).not.toBeDefined();
      expect(oMap.startTime).not.toBeDefined();
      expect(oMap.endTime).not.toBeDefined();
    });
    it(" to_fetch_map ", () => {
      expect(data.to_fetch_map).toBeDefined();
      var oMap: any = {};
      data.to_fetch_map(oMap);
      expect(oMap.type).toEqual(type);
      expect(oMap._id).not.toBeDefined();
      expect(oMap._rev).not.toBeDefined();
      expect(oMap.remarks).not.toBeDefined();
      expect(oMap.avatarid).not.toBeDefined();
      expect(oMap.departementid).not.toBeDefined();
      expect(oMap.anneeid).not.toBeDefined();
      expect(oMap.semestreid).not.toBeDefined();
      expect(oMap.groupeid).not.toBeDefined();
      expect(oMap.uniteid).not.toBeDefined();
      expect(oMap.matiereid).not.toBeDefined();
      expect(oMap.documentids).not.toBeDefined();
      expect(oMap.date).not.toBeDefined();
      expect(oMap.genre).not.toBeDefined();
      expect(oMap.status).not.toBeDefined();
      expect(oMap.profaffectationid).not.toBeDefined();
      expect(oMap.enseignantid).not.toBeDefined();
      expect(oMap.name).not.toBeDefined();
      expect(oMap.location).not.toBeDefined();
      expect(oMap.coefficient).not.toBeDefined();
      expect(oMap.startTime).not.toBeDefined();
      expect(oMap.endTime).not.toBeDefined();
    });
    //
  });
  // normal constructor
  describe(" normal constructor", () => {
    var data: GroupeEvent;
    var id:any = 100;
    var rev:any = 3;
    var remarks: string = 'rem';
    var avatarid: any = 235;
    var departementid:any = 1000;
    var anneeid:any = 2000;
    var semestreid: any = 3000;
    var personid: any = 4000;
    var groupeid: any=5000;
    var uniteid: any = 6000;
    var matiereid: any = 7000;
    var genre:string ='testgenre';
    var date: Date = new Date(2014,8,3);
    var status:string = 'teststatus';
    var documentids:any[] = [1000,1100];
    var profaffectationid:any = 8000;
    var enseignantid:any = 9000;
    var name:string = 'testname';
    var location:string = 'testlocation';
    var coefficient:number = 5;
    var startTime:Date = new Date(2014,5,2);
    var endTime:Date = new Date(2014,5,6);
    //
    beforeEach(() => {
      var oMap: any = { _id: id, _rev: rev, remarks: remarks,
      avatarid : avatarid,
      departementid: departementid, anneeid:anneeid,semestreid:semestreid,
          groupeid:groupeid, personid:personid,
          date: date, uniteid:uniteid, matiereid:matiereid,
          genre:genre, status:status, documentids:documentids,
          profaffectationid:profaffectationid, enseignantid:enseignantid,
          name:name, location:location,coefficient:coefficient,
          startTime:startTime, endTime:endTime
      };
      data = new GroupeEvent(oMap);
    });
    it(" id property ", () => {
      expect(data.id).toEqual(id);
      expect(data.has_id).toEqual(true);
    });
    it(" rev property ", () => {
      expect(data.rev).toEqual(rev);
      expect(data.has_rev).toEqual(true);
    });
    it(" remarks property ", () => {
      expect(data.remarks).toEqual(remarks);
      expect(data.has_remarks).toEqual(true);
    });
    it(" avatarid property ", () => {
      expect(data.avatarid).toEqual(avatarid);
      expect(data.has_avatarid).toEqual(true);
    });
    it(" departementid property ", () => {
      expect(data.departementid).toEqual(departementid);
      expect(data.has_departementid).toEqual(true);
    });
    it(" anneeid property ", () => {
      expect(data.anneeid).toEqual(anneeid);
      expect(data.has_anneeid).toEqual(true);
    });
    it(" semestreid property ", () => {
      expect(data.semestreid).toEqual(semestreid);
      expect(data.has_semestreid).toEqual(true);
    });
    it(" groupeid property ", () => {
      expect(data.groupeid).toEqual(groupeid);
      expect(data.has_groupeid).toEqual(true);
    });
    it(" personid property ", () => {
      expect(data.personid).toEqual(personid);
      expect(data.has_personid).toEqual(true);
    });
    it(" date property ", () => {
      expect(data.date).toEqual(date);
      expect(data.has_date).toEqual(true);
    });
    it(" uniteid property ", () => {
      expect(data.uniteid).toEqual(uniteid);
      expect(data.has_uniteid).toEqual(true);
    });
    it(" matiereid property ", () => {
      expect(data.matiereid).toEqual(matiereid);
      expect(data.has_matiereid).toEqual(true);
    });
    it(" genre property ", () => {
      expect(data.genre).toEqual(genre);
      expect(data.has_genre).toEqual(true);
    });
    it(" status property ", () => {
      expect(data.status).toEqual(status);
      expect(data.has_status).toEqual(true);
    });
    it(" documentids property ", () => {
      expect(data.documentids.length).toEqual(documentids.length);
      expect(data.has_documentids).toEqual(true);
    });
    it(" profaffectationid property ", () => {
      expect(data.profaffectationid).toEqual(profaffectationid);
      expect(data.has_profaffectationid).toEqual(true);
    });
    it(" enseignantid property ", () => {
      expect(data.enseignantid).toEqual(enseignantid);
      expect(data.has_enseignantid).toEqual(true);
    });
    it(" name property ", () => {
      expect(data.name).toEqual(name);
      expect(data.has_name).toEqual(true);
    });
    it(" location property ", () => {
      expect(data.location).toEqual(location);
      expect(data.has_location).toEqual(true);
    });
    it(" coefficient property ", () => {
      expect(data.coefficient).toEqual(coefficient);
      expect(data.has_coefficient).toEqual(true);
    });
    it(" startTime property ", () => {
      expect(data.startTime).toEqual(startTime);
      expect(data.has_startTime).toEqual(true);
    });
    it(" endTime property ", () => {
      expect(data.endTime).toEqual(endTime);
      expect(data.has_endTime).toEqual(true);
    });
    it(" type property ", () => {
      expect(data.type).toEqual(type);
      expect(data.has_type).toEqual(true);
    });
    it(" collection_name property ", () => {
      expect(data.collection_name).toEqual(colname);
      expect(data.has_collection_name).toEqual(true);
    });
    it(" is_storeable property ", () => {
      expect(data.is_storeable).toEqual(true);
    });
    it(" to_insert_map ", () => {
      expect(data.to_insert_map).toBeDefined();
      var oMap: any = {};
      data.to_insert_map(oMap);
      expect(oMap.type).toEqual(type);
      expect(oMap._id).not.toBeDefined();
      expect(oMap._rev).not.toBeDefined();
      expect(oMap.remarks).toEqual(remarks);
      expect(oMap.avatarid).toEqual(avatarid);
      expect(oMap.departementid).toEqual(departementid);
      expect(oMap.anneeid).toEqual(anneeid);
      expect(oMap.semestreid).toEqual(semestreid);
      expect(oMap.groupeid).toEqual(groupeid);
      expect(oMap.date).toEqual(date);
      expect(oMap.genre).toEqual(genre);
      expect(oMap.status).toEqual(status);
      expect(oMap.uniteid).toEqual(uniteid);
      expect(oMap.matiereid).toEqual(matiereid);
      expect(oMap.documentids.length).toEqual(documentids.length);
      expect(oMap.profaffectationid).toEqual(profaffectationid);
      expect(oMap.enseignantid).toEqual(enseignantid);
      expect(oMap.name).toEqual(name);
      expect(oMap.location).toEqual(location);
      expect(oMap.coefficient).toEqual(coefficient);
      expect(oMap.startTime).toEqual(startTime);
      expect(oMap.endTime).toEqual(endTime);
    });
    it(" to_fetch_map ", () => {
      expect(data.to_fetch_map).toBeDefined();
      var oMap: any = {};
      data.to_fetch_map(oMap);
      expect(oMap.type).toEqual(type);
      expect(oMap._id).toEqual(id);
      expect(oMap._rev).toEqual(rev);
      expect(oMap.remarks).toEqual(remarks);
      expect(oMap.avatarid).toEqual(avatarid);
      expect(oMap.departementid).toEqual(departementid);
      expect(oMap.anneeid).toEqual(anneeid);
      expect(oMap.semestreid).toEqual(semestreid);
      expect(oMap.groupeid).toEqual(groupeid);
      expect(oMap.date).toEqual(date);
      expect(oMap.genre).toEqual(genre);
      expect(oMap.status).toEqual(status);
      expect(oMap.uniteid).toEqual(uniteid);
      expect(oMap.matiereid).toEqual(matiereid);
      var x = oMap.documentids;
      var bRet = ((x === undefined) || (x === null));
      expect(bRet).toEqual(true);
      expect(oMap.profaffectationid).toEqual(profaffectationid);
      expect(oMap.enseignantid).toEqual(enseignantid);
      expect(oMap.name).toEqual(name);
      expect(oMap.location).toEqual(location);
      expect(oMap.coefficient).toEqual(coefficient);
      expect(oMap.startTime).toEqual(startTime);
      expect(oMap.endTime).toEqual(endTime);
    });
    //
  });

});
