// profile.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private profiles: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  getProfiles(): Observable<any[]> {
    return this.profiles.asObservable();
  }

  addProfile(profile: any): void {
    const currentProfiles = this.profiles.value;
    this.profiles.next([...currentProfiles, profile]);
  }

  updateProfile(index: number, updatedProfile: any): void {
    const currentProfiles = this.profiles.value;
    currentProfiles[index] = updatedProfile;
    this.profiles.next([...currentProfiles]);
  }

  deleteProfile(index: number): void {
    const currentProfiles = this.profiles.value;
    currentProfiles.splice(index, 1);
    this.profiles.next([...currentProfiles]);
  }
}
