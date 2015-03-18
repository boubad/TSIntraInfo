//etudperson.spec.ts
//
/// <reference path='../../../src/typings/jasmine/jasmine.d.ts' />;
//
import BaseItem = require('../../../src/data/domain/baseitem');
import EtudPerson = require('../../../src/data/domain/etudperson');
//
describe('EtudPerson Tests', () => {
  //
  var type: string = 'etudperson';
  var colname: string = 'persons';
  // empty constructor
  describe(" empty constructor", () => {
    var data: EtudPerson;
    beforeEach(() => {
      data = new EtudPerson();
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
    it(" username property ", () => {
      expect(data.username).toBeDefined();
      expect(data.username).toBeNull();
      expect(data.has_username).toBeDefined();
      expect(data.has_username).toEqual(false);
    });
    it(" password property ", () => {
      expect(data.password).toBeDefined();
      expect(data.password).toBeNull();
      expect(data.has_password).toBeDefined();
      expect(data.has_password).toEqual(false);
    });
    it(" firstname property ", () => {
      expect(data.firstname).toBeDefined();
      expect(data.firstname).toBeNull();
      expect(data.has_firstname).toBeDefined();
      expect(data.has_firstname).toEqual(false);
    });
    it(" lastname property ", () => {
      expect(data.lastname).toBeDefined();
      expect(data.lastname).toBeNull();
      expect(data.has_lastname).toBeDefined();
      expect(data.has_lastname).toEqual(false);
    });
    it(" fullname property ", () => {
      expect(data.fullname).toBeDefined();
      expect(data.fullname).toBeNull();
      expect(data.has_fullname).toBeDefined();
      expect(data.has_fullname).toEqual(false);
    });
    it(" email property ", () => {
      expect(data.email).toBeDefined();
      expect(data.email).toBeNull();
      expect(data.has_email).toBeDefined();
      expect(data.has_email).toEqual(false);
    });
    it(" phone property ", () => {
      expect(data.phone).toBeDefined();
      expect(data.phone).toBeNull();
      expect(data.has_phone).toBeDefined();
      expect(data.has_phone).toEqual(false);
    });
    it(" dossier property ", () => {
      expect(data.dossier).toBeDefined();
      expect(data.dossier).toBeNull();
      expect(data.has_dossier).toBeDefined();
      expect(data.has_dossier).toEqual(false);
    });
    it(" sexe property ", () => {
      expect(data.sexe).toBeDefined();
      expect(data.sexe).toBeNull();
      expect(data.has_sexe).toBeDefined();
      expect(data.has_sexe).toEqual(false);
    });
    it(" birthDate property ", () => {
      expect(data.birthDate).toBeDefined();
      expect(data.birthDate).toBeNull();
      expect(data.has_birthDate).toBeDefined();
      expect(data.has_birthDate).toEqual(false);
    });
    it(" etablissement property ", () => {
      expect(data.etablissement).toBeDefined();
      expect(data.etablissement).toBeNull();
      expect(data.has_etablissement).toBeDefined();
      expect(data.has_etablissement).toEqual(false);
    });
    it(" ville property ", () => {
      expect(data.ville).toBeDefined();
      expect(data.ville).toBeNull();
      expect(data.has_ville).toBeDefined();
      expect(data.has_ville).toEqual(false);
    });
    it(" serieBac property ", () => {
      expect(data.serieBac).toBeDefined();
      expect(data.serieBac).toBeNull();
      expect(data.has_serieBac).toBeDefined();
      expect(data.has_serieBac).toEqual(false);
    });
    it(" optionBac property ", () => {
      expect(data.optionBac).toBeDefined();
      expect(data.optionBac).toBeNull();
      expect(data.has_optionBac).toBeDefined();
      expect(data.has_optionBac).toEqual(false);
    });
    it(" mentionBac property ", () => {
      expect(data.mentionBac).toBeDefined();
      expect(data.mentionBac).toBeNull();
      expect(data.has_mentionBac).toBeDefined();
      expect(data.has_mentionBac).toEqual(false);
    });
    it(" etudesSuperieures property ", () => {
      expect(data.etudesSuperieures).toBeDefined();
      expect(data.etudesSuperieures).toBeNull();
      expect(data.has_etudesSuperieures).toBeDefined();
      expect(data.has_etudesSuperieures).toEqual(false);
    });
    it(" departementids property ", () => {
      expect(data.departementids).toBeDefined();
      expect(data.departementids).toBeNull();
      expect(data.has_departementids).toBeDefined();
      expect(data.has_departementids).toEqual(false);
      data.add_departementid(123);
      data.add_departementid(789);
      var id: any = 235;
      data.add_departementid(id);
      expect(data.has_departementids).toEqual(true);
      var bRet: boolean = BaseItem.array_contains(data.departementids, id);
      expect(bRet).toEqual(true);
      data.remove_departementid(id);
      bRet = BaseItem.array_contains(data.departementids, id);
      expect(bRet).toEqual(false);
    });
    it(" groupeids property ", () => {
      expect(data.groupeids).toBeDefined();
      expect(data.groupeids).toBeNull();
      expect(data.has_groupeids).toBeDefined();
      expect(data.has_groupeids).toEqual(false);
      var id: any = 235;
      data.add_groupeid(id);
      expect(data.has_groupeids).toEqual(true);
      var bRet: boolean = BaseItem.array_contains(data.groupeids, id);
      expect(bRet).toEqual(true);
      data.remove_groupeid(id);
      bRet = BaseItem.array_contains(data.groupeids, id);
      expect(bRet).toEqual(false);
    });
    it(" anneeids property ", () => {
      expect(data.anneeids).toBeDefined();
      expect(data.anneeids).toBeNull();
      expect(data.has_anneeids).toBeDefined();
      expect(data.has_anneeids).toEqual(false);
      var id: any = 235;
      data.add_anneeid(id);
      expect(data.has_anneeids).toEqual(true);
      var bRet: boolean = BaseItem.array_contains(data.anneeids, id);
      expect(bRet).toEqual(true);
      data.remove_anneeid(id);
      bRet = BaseItem.array_contains(data.anneeids, id);
      expect(bRet).toEqual(false);
    });
    it(" semestreids property ", () => {
      expect(data.semestreids).toBeDefined();
      expect(data.semestreids).toBeNull();
      expect(data.has_semestreids).toBeDefined();
      expect(data.has_semestreids).toEqual(false);
      var id: any = 235;
      data.add_semestreid(id);
      expect(data.has_semestreids).toEqual(true);
      var bRet: boolean = BaseItem.array_contains(data.semestreids, id);
      expect(bRet).toEqual(true);
      data.remove_semestreid(id);
      bRet = BaseItem.array_contains(data.semestreids, id);
      expect(bRet).toEqual(false);
    });
    it(" uniteids property ", () => {
      expect(data.uniteids).toBeDefined();
      expect(data.uniteids).toBeNull();
      expect(data.has_uniteids).toBeDefined();
      expect(data.has_uniteids).toEqual(false);
      var id: any = 235;
      data.add_uniteid(id);
      expect(data.has_uniteids).toEqual(true);
      var bRet: boolean = BaseItem.array_contains(data.uniteids, id);
      expect(bRet).toEqual(true);
      data.remove_uniteid(id);
      bRet = BaseItem.array_contains(data.uniteids, id);
      expect(bRet).toEqual(false);
    });
    it(" matiereids property ", () => {
      expect(data.matiereids).toBeDefined();
      expect(data.matiereids).toBeNull();
      expect(data.has_matiereids).toBeDefined();
      expect(data.has_matiereids).toEqual(false);
      var id: any = 235;
      data.add_matiereid(id);
      expect(data.has_matiereids).toEqual(true);
      var bRet: boolean = BaseItem.array_contains(data.matiereids, id);
      expect(bRet).toEqual(true);
      data.remove_matiereid(id);
      bRet = BaseItem.array_contains(data.matiereids, id);
      expect(bRet).toEqual(false);
    });
    it(" infoids property ", () => {
      expect(data.infoids).toBeDefined();
      expect(data.infoids).toBeNull();
      expect(data.has_infoids).toBeDefined();
      expect(data.has_infoids).toEqual(false);
      var id: any = 235;
      data.add_infoid(id);
      expect(data.has_infoids).toEqual(true);
      var bRet: boolean = BaseItem.array_contains(data.infoids, id);
      expect(bRet).toEqual(true);
      data.remove_infoid(id);
      bRet = BaseItem.array_contains(data.infoids, id);
      expect(bRet).toEqual(false);
    });
    it(" roles property ", () => {
      expect(data.roles).toBeDefined();
      expect(data.roles).not.toBeNull();
      expect(data.has_roles).toEqual(true);
      expect(data.is_etud).toEqual(true);
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
      expect(oMap.username).not.toBeDefined();
      expect(oMap.password).not.toBeDefined();
      expect(oMap.firstname).not.toBeDefined();
      expect(oMap.lastname).not.toBeDefined();
      expect(oMap.fullname).not.toBeDefined();
      expect(oMap.email).not.toBeDefined();
      expect(oMap.phone).not.toBeDefined();
      expect(oMap.roles).not.toBeNull();
      expect(oMap.infoids).not.toBeDefined();
      expect(oMap.departementids).not.toBeDefined();
      expect(oMap.anneeids).not.toBeDefined();
      expect(oMap.semestreids).not.toBeDefined();
      expect(oMap.uniteids).not.toBeDefined();
      expect(oMap.matiereids).not.toBeDefined();
      expect(oMap.dossier).not.toBeDefined();
      expect(oMap.sexe).not.toBeDefined();
      expect(oMap.birthDate).not.toBeDefined();
      expect(oMap.etablissement).not.toBeDefined();
      expect(oMap.ville).not.toBeDefined();
      expect(oMap.serieBac).not.toBeDefined();
      expect(oMap.optionBac).not.toBeDefined();
      expect(oMap.mentionBac).not.toBeDefined();
      expect(oMap.etudesSuperieures).not.toBeDefined();
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
      expect(oMap.username).not.toBeDefined();
      expect(oMap.password).not.toBeDefined();
      expect(oMap.firstname).not.toBeDefined();
      expect(oMap.lastname).not.toBeDefined();
      expect(oMap.fullname).not.toBeDefined();
      expect(oMap.email).not.toBeDefined();
      expect(oMap.phone).not.toBeDefined();
      expect(oMap.roles).not.toBeNull();
      expect(oMap.infoids).not.toBeDefined();
      expect(oMap.departementids).not.toBeDefined();
      expect(oMap.anneeids).not.toBeDefined();
      expect(oMap.semestreids).not.toBeDefined();
      expect(oMap.uniteids).not.toBeDefined();
      expect(oMap.matiereids).not.toBeDefined();
      expect(oMap.dossier).not.toBeDefined();
      expect(oMap.sexe).not.toBeDefined();
      expect(oMap.birthDate).not.toBeDefined();
      expect(oMap.etablissement).not.toBeDefined();
      expect(oMap.ville).not.toBeDefined();
      expect(oMap.serieBac).not.toBeDefined();
      expect(oMap.optionBac).not.toBeDefined();
      expect(oMap.mentionBac).not.toBeDefined();
      expect(oMap.etudesSuperieures).not.toBeDefined();
    });
    it(" reset_password method ", () => {
      data.username = 'bouba256';
      var dest = 'eb2b7a4cdb39d84c45261dac74bc8116';
      data.reset_password();
      expect(data.password).toEqual(dest);
    });
    it(" change_password method ", () => {
      var dest = 'eb2b7a4cdb39d84c45261dac74bc8116';
      data.change_password('bouba256');
      expect(data.password).toEqual(dest);
    });
    it(" check_password method ", () => {
      data.username = 'bouba256';
      var dest = 'eb2b7a4cdb39d84c45261dac74bc8116';
      data.reset_password();
      expect(data.password).toEqual(dest);
      var bRet = data.check_password('bouba256');
      expect(bRet).toEqual(true);
    });
    it(" roles method ", () => {
      expect(data.is_super).toEqual(false);
      expect(data.is_admin).toEqual(false);
      expect(data.is_oper).toEqual(false);
      expect(data.is_prof).toEqual(false);
      expect(data.is_etud).toEqual(true);
      expect(data.is_reader).toEqual(false);
    });
    //
  });
  // normal constructor
  describe(" normal constructor", () => {
    var data: EtudPerson;
    var id: any = 100;
    var rev: any = 3;
    var remarks: string = 'rem';
    var avatarid: any = 235;
    var username: string = 'testusername';
    var password: string = 'testpassword';
    var firstname: string = 'Testfirstname';
    var lastname: string = 'TESTLASTNAME';
    var email: string = 'machin@toto.com';
    var phone: string = '02-35-76-39-68';
    var infoids: any[] = [12, 13, 15];
    var departementids: any[] = [12, 13, 15];
    var anneeids: any[] = [12, 13, 15];
    var semestreids: any[] = [12, 13, 15];
    var uniteids: any[] = [12, 13, 15];
    var matiereids: any[] = [12, 13, 15];
    var groupeids: any[] = [12, 13, 15];
    var dossier: string = "453275";
    var sexe: string = 'masculin';
    var birthDate: Date = new Date(1990, 7, 8);
    var etablissement: string = 'Lycée Corneille';
    var ville: string = 'Rouen';
    var serieBac: string = 's';
    var optionBac: string = 'svt';
    var mentionBac: string = 'ab';
    var etudesSuperieures: string = 'mph1';
    //
    beforeEach(() => {
      var oMap: any = {
        _id: id, _rev: rev, remarks: remarks,
        avatarid: avatarid, username: username, password: password,
        firstname: firstname, lastname: lastname, email: email,
        phone: phone, infoids: infoids,
        departementids: departementids, anneeids: anneeids,
        semestreids: semestreids, uniteids: uniteids,
        matiereids: matiereids, groupeids: groupeids, dossier: dossier,
        sexe: sexe, birthDate: birthDate, etablissement: etablissement,
        ville: ville, serieBac: serieBac, optionBac: optionBac,
        mentionBac: mentionBac, etudesSuperieures:etudesSuperieures
      };
      data = new EtudPerson(oMap);
      data.reset_password();
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
    it(" username property ", () => {
      expect(data.username).toEqual(username);
      expect(data.has_username).toEqual(true);
    });
    it(" password property ", () => {
      expect(data.password).toBeDefined();
      expect(data.password).not.toBeNull();
      expect(data.has_password).toEqual(true);
    });
    it(" firstname property ", () => {
      expect(data.firstname).toEqual(firstname);
      expect(data.has_firstname).toEqual(true);
    });
    it(" lastname property ", () => {
      expect(data.lastname).toEqual(lastname);
      expect(data.has_lastname).toEqual(true);
    });
    it(" fullname property ", () => {
      expect(data.fullname).toEqual(lastname + ' ' + firstname);
      expect(data.has_fullname).toEqual(true);
    });
    it(" email property ", () => {
      expect(data.email).toEqual(email);
      expect(data.has_email).toEqual(true);
    });
    it(" phone property ", () => {
      expect(data.phone).toEqual(phone);
      expect(data.has_phone).toEqual(true);
    });
    it(" departementids property ", () => {
      expect(data.departementids).toBeDefined();
      expect(data.departementids).not.toBeNull();
      expect(data.has_departementids).toEqual(true);
    });
    it(" groupeids property ", () => {
      expect(data.groupeids).toBeDefined();
      expect(data.groupeids).not.toBeNull();
      expect(data.has_groupeids).toEqual(true);
    });
    it(" anneeids property ", () => {
      expect(data.anneeids).toBeDefined();
      expect(data.anneeids).not.toBeNull();
      expect(data.has_anneeids).toEqual(true);
    });
    it(" semestreids property ", () => {
      expect(data.semestreids).toBeDefined();
      expect(data.semestreids).not.toBeNull();
      expect(data.has_semestreids).toEqual(true);
    });
    it(" uniteids property ", () => {
      expect(data.uniteids).toBeDefined();
      expect(data.uniteids).not.toBeNull();
      expect(data.has_uniteids).toEqual(true);
    });
    it(" matiereids property ", () => {
      expect(data.matiereids).toBeDefined();
      expect(data.has_matiereids).not.toBeNull();
      expect(data.has_matiereids).toEqual(true);
    });
    it(" infoids property ", () => {
      expect(data.infoids).toBeDefined();
      expect(data.infoids).not.toBeNull();
      expect(data.has_infoids).toEqual(true);
    });
    it(" roles property ", () => {
      expect(data.roles).toBeDefined();
      expect(data.roles).not.toBeNull();
      expect(data.has_roles).toEqual(true);
    });
    it(" dossier property ", () => {
      expect(data.dossier).toEqual(dossier);
      expect(data.has_dossier).toEqual(true);
    });
    it(" sexe property ", () => {
      expect(data.sexe).toEqual(sexe);
      expect(data.has_sexe).toEqual(true);
    });
    it(" birthDate property ", () => {
      expect(data.birthDate).toEqual(birthDate);
      expect(data.has_birthDate).toEqual(true);
    });
    it(" etablissement property ", () => {
      expect(data.etablissement).toEqual(etablissement);
      expect(data.has_etablissement).toEqual(true);
    });
    it(" ville property ", () => {
      expect(data.ville).toEqual(ville);
      expect(data.has_ville).toEqual(true);
    });
    it(" serieBac property ", () => {
      expect(data.serieBac).toEqual(serieBac);
      expect(data.has_serieBac).toEqual(true);
    });
    it(" optionBac property ", () => {
      expect(data.optionBac).toEqual(optionBac);
      expect(data.has_optionBac).toEqual(true);
    });
    it(" mentionBac property ", () => {
      expect(data.mentionBac).toEqual(mentionBac);
      expect(data.has_mentionBac).toEqual(true);
    });
    it(" etudesSuperieures property ", () => {
      expect(data.etudesSuperieures).toEqual(etudesSuperieures);
      expect(data.has_etudesSuperieures).toEqual(true);
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
      expect(oMap.remarks).toEqual(remarks);
      expect(oMap.avatarid).toEqual(avatarid);
      expect(oMap.username).toEqual(username);
      expect(oMap.password).toBeDefined();
      expect(oMap.password).not.toBeNull();
      expect(oMap.firstname).toEqual(firstname);
      expect(oMap.lastname).toEqual(lastname);
      expect(oMap.fullname).not.toBeDefined();
      expect(oMap.email).toEqual(email);
      expect(oMap.phone).toEqual(phone);
      expect(oMap.roles).not.toBeNull();
      expect(oMap.infoids).not.toBeNull();
      expect(oMap.departementids).not.toBeNull();
      expect(oMap.anneeids).not.toBeNull();
      expect(oMap.semestreids).not.toBeNull();
      expect(oMap.uniteids).not.toBeNull();
      expect(oMap.matiereids).not.toBeNull();
      expect(oMap.dossier).toEqual(dossier);
      expect(oMap.sexe).toEqual(sexe);
      expect(oMap.birthDate).toEqual(birthDate);
      expect(oMap.etablissement).toEqual(etablissement);
      expect(oMap.ville).toEqual(ville);
      expect(oMap.serieBac).toEqual(serieBac);
      expect(oMap.optionBac).toEqual(optionBac);
      expect(oMap.mentionBac).toEqual(mentionBac);
      expect(oMap.etudesSuperieures).toEqual(etudesSuperieures);
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
      expect(oMap.username).toEqual(username);
      expect(oMap.password).toBeDefined();
      expect(oMap.password).not.toBeNull();
      expect(oMap.firstname).toEqual(firstname);
      expect(oMap.lastname).toEqual(lastname);
      expect(oMap.fullname).not.toBeDefined();
      expect(oMap.email).toEqual(email);
      expect(oMap.phone).toEqual(phone);
      expect(oMap.roles).not.toBeDefined();
      expect(oMap.infoids).not.toBeDefined();
      expect(oMap.departementids).not.toBeDefined();
      expect(oMap.anneeids).not.toBeDefined();
      expect(oMap.semestreids).not.toBeDefined();
      expect(oMap.uniteids).not.toBeDefined();
      expect(oMap.matiereids).not.toBeDefined();
      expect(oMap.dossier).toEqual(dossier);
      expect(oMap.sexe).toEqual(sexe);
      expect(oMap.birthDate).toEqual(birthDate);
      expect(oMap.etablissement).toEqual(etablissement);
      expect(oMap.ville).toEqual(ville);
      expect(oMap.serieBac).toEqual(serieBac);
      expect(oMap.optionBac).toEqual(optionBac);
      expect(oMap.mentionBac).toEqual(mentionBac);
      expect(oMap.etudesSuperieures).toEqual(etudesSuperieures);
    });
    it(" roles method ", () => {
      expect(data.is_super).toEqual(false);
      expect(data.is_admin).toEqual(false);
      expect(data.is_oper).toEqual(false);
      expect(data.is_prof).toEqual(false);
      expect(data.is_etud).toEqual(true);
      expect(data.is_reader).toEqual(false);
    });
    //
  });

});
