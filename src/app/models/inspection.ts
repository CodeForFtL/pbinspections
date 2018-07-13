import * as firebase from 'firebase/app';

export interface Inspection {
  uid?: string;
  id?: string;
  inspectorId?: number;
  inspectorName?: string;
  permitNumber?: string;
  inspectionDate?: firebase.firestore.Timestamp;
  owner?: string;
  address?: string;
  zipCode?: string;
  apt?: number;
  permitType?: string;
  inspectionType?: number;
  inspectionResults?: string;
  inspectionCodeDesc?: string;
  locId?: number;
  folioNo?: string;
}
