export interface Offer {
  id: string;
  candidateName: string;
  candidateEmail: string;
  position: string;
  department: string;
  company: string;
  salary: string;
  location: string;
  startDate: string;
  expiryDate: string;
  status: OfferStatus;
  createdDate: string;
  benefits?: string;
  requirements?: string;
}

export type OfferStatus = 'pending' | 'accepted' | 'declined' | 'expired';

export interface OfferForm {
  candidateName: string;
  candidateEmail: string;
  position: string;
  department: string;
  salary: string;
  location: string;
  startDate: string;
  expiryDate: string;
  benefits: string;
  requirements: string;
}

export interface OfferVerificationResult {
  isValid: boolean;
  message: string;
  details?: OfferDetails;
}

export interface OfferDetails {
  company: string;
  position: string;
  salary: string;
  location: string;
  issuedDate: string;
  expiryDate: string;
} 