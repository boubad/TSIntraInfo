//unite.spec.ts
//
/// <reference path='../../../src/typings/jasmine/jasmine.d.ts' />;
//
import Unite = require('../../../src/data/domain/unite');
//
describe('Unite Tests', () => {
    //
    var type:string = 'unite';
    var colname:string = 'unites';
  // empty constructor
  describe(" empty constructor", () => {
    var data: Unite;
    beforeEach(() => {
      data = new Unite();
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
    });
    //
  });
  // normal constructor
  describe(" normal constructor", () => {
    var data: Unite;
    //
    var id:any = 100;
    var rev:any = 3;
    var remarks: string = 'rem';
    var avatarid: any = 235;
    var departementid = 1000;
    var sigle:string = 'testsigle';
    var name:string = 'testname';
    //
    beforeEach(function() {
      var oMap: any = { _id: id, _rev: rev, remarks: remarks,
      avatarid : avatarid, departementid: departementid,
      sigle: sigle, name:name };
      data = new Unite(oMap);
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
    });
    //
  });

});
