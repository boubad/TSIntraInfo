//matiere.spec.ts
//
/// <reference path='../../../src/typings/jasmine/jasmine.d.ts' />;
//
import Matiere = require('../../../src/data/domain/matiere');
//
describe('Matiere Tests', () => {
    //
    var type:string = 'matiere';
    var colname:string = 'matieres';
  // empty constructor
  describe(" empty constructor", () => {
    var data: Matiere;
    beforeEach(() => {
      data = new Matiere();
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
    it(" sigle property ", () => {
      expect(data.sigle).toBeDefined();
      expect(data.sigle).toBeNull();
      expect(data.has_sigle).toBeDefined();
      expect(data.has_sigle).toEqual(false);
    });
    it(" name property ", () => {
      expect(data.name).toBeDefined();
      expect(data.name).toBeNull();
      expect(data.has_name).toBeDefined();
      expect(data.has_name).toEqual(false);
    });
    it(" uniteid property ", () => {
      expect(data.uniteid).toBeDefined();
      expect(data.uniteid).toBeNull();
      expect(data.has_uniteid).toBeDefined();
      expect(data.has_uniteid).toEqual(false);
    });
    it(" genre property ", () => {
      expect(data.genre).toBeDefined();
      expect(data.genre).toBeNull();
      expect(data.has_genre).toBeDefined();
      expect(data.has_genre).toEqual(false);
    });
    it(" mat_module property ", () => {
      expect(data.mat_module).toBeDefined();
      expect(data.mat_module).toBeNull();
      expect(data.has_mat_module).toBeDefined();
      expect(data.has_mat_module).toEqual(false);
    });
    it(" coefficient property ", () => {
      expect(data.coefficient).toBeDefined();
      expect(data.coefficient).toBeNull();
      expect(data.has_coefficient).toBeDefined();
      expect(data.has_coefficient).toEqual(false);
    });
    it(" ecs property ", () => {
      expect(data.ecs).toBeDefined();
      expect(data.ecs).toBeNull();
      expect(data.has_ecs).toBeDefined();
      expect(data.has_ecs).toEqual(false);
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
      expect(oMap.type).toEqual(type);
      expect(oMap.remarks).not.toBeDefined();
      expect(oMap.avatarid).not.toBeDefined();
      expect(oMap.departementid).not.toBeDefined();
      expect(oMap.sigle).not.toBeDefined();
      expect(oMap.name).not.toBeDefined();
      expect(oMap.uniteid).not.toBeDefined();
      expect(oMap.genre).not.toBeDefined();
      expect(oMap.mat_module).not.toBeDefined();
      expect(oMap.coefficient).not.toBeDefined();
      expect(oMap.ecs).not.toBeDefined();
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
      expect(oMap.sigle).not.toBeDefined();
      expect(oMap.name).not.toBeDefined();
      expect(oMap.uniteid).not.toBeDefined();
      expect(oMap.genre).not.toBeDefined();
      expect(oMap.mat_module).not.toBeDefined();
      expect(oMap.coefficient).not.toBeDefined();
      expect(oMap.ecs).not.toBeDefined();
    });
    //
  });
  // normal constructor
  describe(" normal constructor", () => {
    var data: Matiere;
    //
    var id:any = 100;
    var rev:any = 3;
    var remarks: string = 'rem';
    var avatarid: any = 235;
    var departementid = 1000;
    var sigle:string = 'testsigle';
    var name:string = 'testname';
    var uniteid:any = 3000;
    var genre:string = 'pratique';
    var mat_module:string = 'm342';
    var coefficient:number = 3;
    var ecs:number = 500;
    //
    beforeEach(function() {
      var oMap: any = { _id: id, _rev: rev, remarks: remarks,
      avatarid : avatarid, departementid: departementid,
      sigle: sigle, name:name, uniteid:uniteid,genre:genre,
      mat_module: mat_module, coefficient:coefficient, ecs: ecs};
      data = new Matiere(oMap);
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
    it(" sigle property ", () => {
      expect(data.sigle).toEqual(sigle);
      expect(data.has_sigle).toEqual(true);
    });
     it(" name property ", () => {
      expect(data.name).toEqual(name);
      expect(data.has_name).toEqual(true);
    });
    it(" uniteid property ", () => {
      expect(data.uniteid).toEqual(uniteid);
      expect(data.has_uniteid).toEqual(true);
    });
    it(" genre property ", () => {
      expect(data.genre).toEqual(genre);
      expect(data.has_genre).toEqual(true);
    });
    it(" mat_module property ", () => {
      expect(data.mat_module).toEqual(mat_module);
      expect(data.has_mat_module).toEqual(true);
    });
    it(" coefficient property ", () => {
      expect(data.coefficient).toEqual(coefficient);
      expect(data.has_coefficient).toEqual(true);
    });
    it(" ecs property ", () => {
      expect(data.ecs).toEqual(ecs);
      expect(data.has_ecs).toEqual(true);
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
      expect(oMap.sigle).toEqual(sigle);
      expect(oMap.name).toEqual(name);
      expect(oMap.uniteid).toEqual(uniteid);
      expect(oMap.genre).toEqual(genre);
      expect(oMap.mat_module).toEqual(mat_module);
      expect(oMap.coefficient).toEqual(coefficient);
      expect(oMap.ecs).toEqual(ecs);
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
      expect(oMap.sigle).toEqual(sigle);
      expect(oMap.name).toEqual(name);
      expect(oMap.uniteid).toEqual(uniteid);
      expect(oMap.genre).toEqual(genre);
      expect(oMap.mat_module).toEqual(mat_module);
      expect(oMap.coefficient).toEqual(coefficient);
      expect(oMap.ecs).toEqual(ecs);
    });
    //
  });

});
