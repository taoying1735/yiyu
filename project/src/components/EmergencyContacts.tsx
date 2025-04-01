import React from 'react';
import { emergencyContacts } from '../data/emergencyContacts';
import { Phone } from 'lucide-react';

export const EmergencyContacts: React.FC = () => {
  return (
    <div className="mt-8 bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">紧急求助热线</h2>
      <div className="grid gap-4">
        {emergencyContacts.map((contact, index) => (
          <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
            <Phone className="h-6 w-6 text-green-600 mr-4" />
            <div>
              <h3 className="font-medium text-gray-900">{contact.name}</h3>
              <p className="text-gray-600">{contact.phone}</p>
              {contact.hours && (
                <p className="text-sm text-gray-500">服务时间: {contact.hours}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};